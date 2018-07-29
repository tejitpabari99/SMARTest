#import "RNOpenCvLibrary.h"
#import <React/RCTLog.h>

@implementation RNOpenCvLibrary

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()



// MARK: - Methods Exposed to React Native

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

RCT_EXPORT_METHOD(checkForBlurryImage:(NSString *)imageAsBase64 callback:(RCTResponseSenderBlock)callback) {
  UIImage* image = [self decodeBase64ToImage:imageAsBase64];
  BOOL isImageBlurryResult = [self isImageBlurry:image];
  
  id objects[] = { isImageBlurryResult ? @YES : @NO };
  NSUInteger count = sizeof(objects) / sizeof(id);
  NSArray *dataArray = [NSArray arrayWithObjects:objects
                                           count:count];
  
  callback(@[[NSNull null], dataArray]);
}
/*
RCT_EXPORT_METHOD(getImageMask:(NSString *)imageAsBase64 callback:(RCTResponseSenderBlock)callback) {
  UIImage* image = [self decodeBase64ToImage:imageAsBase64];
  NSString* maskedImageInBase64 = [self getImageMask:image];
  
  id objects[] = { maskedImageInBase64 };
  NSUInteger count = sizeof(objects) / sizeof(id);
  NSArray *dataArray = [NSArray arrayWithObjects:objects
                                           count:count];
  
  callback(@[[NSNull null], dataArray]);
}
*/
RCT_EXPORT_METHOD(getProcessedImage:(NSString *)imageAsBase64 callback:(RCTResponseSenderBlock)callback) {
  UIImage* image = [self decodeBase64ToImage:imageAsBase64];
  NSString* processedImageInBase64 = [self getProcessedImage:image];
  
  id objects[] = { processedImageInBase64 };
  NSUInteger count = sizeof(objects) / sizeof(id);
  NSArray *dataArray = [NSArray arrayWithObjects:objects
                                           count:count];
  
  callback(@[[NSNull null], dataArray]);
}



// MARK: - OpenCV Functions for Actual Image Processing

- (BOOL) isImageBlurry:(UIImage *) image {
  // converting UIImage to OpenCV format - Mat
  cv::Mat matImage = [self convertUIImageToCVMat:image];
  cv::Mat matImageGrey;
  // converting image's color space (RGB) to grayscale
  cv::cvtColor(matImage, matImageGrey, CV_BGR2GRAY);
  
  cv::Mat dst2 = [self convertUIImageToCVMat:image];
  cv::Mat laplacianImage;
  dst2.convertTo(laplacianImage, CV_8UC1);
  
  // applying Laplacian operator to the image
  cv::Laplacian(matImageGrey, laplacianImage, CV_8U);
  cv::Mat laplacianImage8bit;
  laplacianImage.convertTo(laplacianImage8bit, CV_8UC1);
  
  unsigned char *pixels = laplacianImage8bit.data;
  
  // 16777216 = 256*256*256
  int maxLap = -16777216;
  for (int i = 0; i < ( laplacianImage8bit.elemSize()*laplacianImage8bit.total()); i++) {
    if (pixels[i] > maxLap) {
      maxLap = pixels[i];
    }
  }
  // one of the main parameters here: threshold sets the sensitivity for the blur check
  // smaller number = less sensitive; default = 180
  int threshold = 180;
  
  return (maxLap <= threshold);
}

- (cv::Mat) denoise:(cv::Mat) mask {
  cv::Mat processedMask;
  
  cv::Mat kernel;
  kernel = cv::getStructuringElement(cv::MORPH_RECT, cv::Size(3,3));
  cv::morphologyEx(mask, processedMask, cv::MORPH_OPEN, kernel);
  
  return processedMask;
}

- (cv::Mat) smoothOut:(cv::Mat) mask {
  cv::Mat processedMask;
  
  cv::pyrUp(mask, processedMask);
  for (int i = 0; i < 15; i++) {
    cv::medianBlur(processedMask, processedMask, 15);
  }
  cv::threshold(processedMask, processedMask, 30.0, 255.0, cv::THRESH_BINARY);
  cv::pyrDown(processedMask, processedMask);
  cv::threshold(processedMask, processedMask, 127.0, 255.0, cv::THRESH_BINARY);
  
  return processedMask;
}

- (std::vector<cv::KeyPoint>) detectSmallestCircle:(cv::Mat) mask {
  cv::SimpleBlobDetector::Params circleDetectorParams;
  circleDetectorParams.filterByArea = true;
  circleDetectorParams.minArea = 20000;       // 800    //200
  circleDetectorParams.maxArea = 700000;      // 7000   //7000
  
  circleDetectorParams.filterByCircularity = true;
  circleDetectorParams.minCircularity = 0.5;
  
  circleDetectorParams.filterByInertia = true;
  circleDetectorParams.minInertiaRatio = 0.5;
  
  return [self detectBlob:mask withParams:circleDetectorParams];
}

- (std::vector<cv::KeyPoint>) detectDots:(cv::Mat) mask aroundCenter:(cv::Point) center withRadius:(float) radius {
  
  if (radius < 20) {
    radius = 20;
  }
  
  // Set up the detector with appropriate parameters for dot detection.
  cv::SimpleBlobDetector::Params dotDetectorParams;
  
  dotDetectorParams.filterByArea = true;
  dotDetectorParams.minArea = 20;
  dotDetectorParams.maxArea = 400;
  
  dotDetectorParams.filterByCircularity = true;
  dotDetectorParams.minCircularity = 0.5;
  
  dotDetectorParams.filterByInertia = true;
  dotDetectorParams.minInertiaRatio = 0.5;
  
  // Inverse image b/c SimpleBlobDetector only detects black areas.
  mask = 255 - mask; // if doesn't work, try cv::Mat::ones(mask.rows, mask.cols, mask.type()) * 255
  
  std::vector<cv::KeyPoint> dots = [self detectBlob:mask withParams:dotDetectorParams];
  std::vector<cv::KeyPoint> filteredDots;
  /*
  for (int i = 0; i < dots.size(); i++) {
    if (<#condition#>) {
      <#statements#>
    }
  }*/
  /* TODO: Implementation not so urgent.
   def detect_dot(thresholded_image, center = None, radius = None):
   
     dots = detect_blob(thresholded_image, dotDetectorParams)
   
     if center == None or radius == None:
       return dots
     #print("radius: {}".format(radius))
     if radius < 20:
       radius = 20
   
     filtered_dots = []
   
     for dot in dots:
       #print("dist: {}".format(euclidean_dist(dot.pt, center)))
       if euclidean_dist(dot.pt, center) <= radius:
         filtered_dots.append(dot)
   
     return filtered_dots
   */
  
  return filteredDots;
}

- (std::vector<cv::KeyPoint>) detectBlob:(cv::Mat) image withParams:(cv::SimpleBlobDetector::Params) params {
  
  if (cv::mean(image)[0] < 1.1) {
    image = image * 255.0;
  }
  
  if (!(image.type() == CV_8U)) {
    NSLog(@"Log: Type non-conforming!");
    cv::Mat newIntImage;
    image.convertTo(newIntImage, CV_8U);
    image = newIntImage;
  }
  
  cv::Ptr<cv::SimpleBlobDetector> detector = cv::SimpleBlobDetector::create(params);
  std::vector<cv::KeyPoint> keypoints;
  
  detector->detect(image, keypoints);
  
  return keypoints;
}

- (cv::Mat) drawKeypoints:(std::vector<cv::KeyPoint>) keypoints onImage:(cv::Mat) image {
  
  cv::Mat imageWithKeypoints;
  
  // cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS ensures the size of the circle corresponds to the size of blob
  cv::drawKeypoints(image, keypoints, imageWithKeypoints, cv::Scalar(255,0,0), cv::DrawMatchesFlags::DRAW_RICH_KEYPOINTS);
  
  return imageWithKeypoints;
}

- (NSString *) getProcessedImage:(UIImage *) image {
  
  // converting UIImage to grayed OpenCV format - Mat
  cv::Mat matImage = [self convertUIImageToCVMat:image];
  cv::Mat matImageGrey;
  cv::cvtColor(matImage, matImageGrey, CV_BGR2GRAY);
  
  // getting thresholded image mask and denoise
  cv::Mat thresholdMask;
  cv::adaptiveThreshold(matImageGrey, thresholdMask, 255.0, cv::ADAPTIVE_THRESH_MEAN_C, cv::THRESH_BINARY_INV, 13.0, 2.0);
  thresholdMask = [self denoise:thresholdMask];
  cv::Mat smoothedMask = [self smoothOut:thresholdMask];
  
  std::vector<cv::KeyPoint> circlesDetected = [self detectSmallestCircle: smoothedMask];
  
  if (circlesDetected.size() < 1) {
    circlesDetected = [self detectSmallestCircle: thresholdMask];
  }
  
  if (circlesDetected.size() < 1) {
    NSLog(@"Error: Failed to detect Circle of Interest!");
    return [self encodeImageToBase64:[self UIImageFromCVMat:smoothedMask withOrientation:image.imageOrientation]];
    //return @"{\"error\" : \"Failed to detect Circle of Interest!\"}";
  }
  
  cv::Point2f centerOfCircle = circlesDetected[0].pt;
  float radiusOfCircle = circlesDetected[0].size/2;
  
  NSLog(@"Log: Original Radius of Circle is %f", radiusOfCircle);
  
  if (radiusOfCircle < 200) {
    radiusOfCircle = 200;
  }
  
  NSLog(@"Log: Radius of Circle is %f", radiusOfCircle);
  
  cv::Rect boundingRect(cvFloor(centerOfCircle.x - radiusOfCircle), cvFloor(centerOfCircle.y - radiusOfCircle), cvCeil(2 * radiusOfCircle), cvCeil(2 * radiusOfCircle));
  
  cv::Mat cropped(thresholdMask, boundingRect);
  cv::Mat maskROI;
  cropped.copyTo(maskROI);
  
  cv::Mat imageWithDetectedCircles = [self drawKeypoints:circlesDetected onImage:smoothedMask];
  
  /*std::vector<cv::KeyPoint> dotsDetected = [self detectDots:thresholdMask aroundCenter:centerOfCircle withRadius:radiusOfCircle];
  cv::Mat imageWithDetectedDots = [self drawKeypoints:dotsDetected onImage:thresholdMask];//*/
  
  return [self encodeImageToBase64:[self UIImageFromCVMat:imageWithDetectedCircles withOrientation:image.imageOrientation]];
}


// MARK: - Utility Functions for Image Type Conversions

- (cv::Mat)convertUIImageToCVMat:(UIImage *)image {
  CGColorSpaceRef colorSpace = CGImageGetColorSpace(image.CGImage);
  CGFloat cols, rows;
  
  NSLog(@"Image (h, w): (%f, %f)", image.size.height, image.size.width);
  NSLog(@"%ld", (long)image.imageOrientation);
  
  if  (image.imageOrientation == UIImageOrientationLeft
       || image.imageOrientation == UIImageOrientationRight) {
    cols = image.size.height;
    rows = image.size.width;
  } else {
    cols = image.size.width;
    rows = image.size.height;
  }
  
  cv::Mat cvMat(rows, cols, CV_8UC4); // 8 bits per component, 4 channels (color channels + alpha)
  
  CGContextRef contextRef = CGBitmapContextCreate(cvMat.data,                 // Pointer to  data
                                                  cols,                       // Width of bitmap
                                                  rows,                       // Height of bitmap
                                                  8,                          // Bits per component
                                                  cvMat.step[0],              // Bytes per row
                                                  colorSpace,                 // Colorspace
                                                  kCGImageAlphaNoneSkipLast |
                                                  kCGBitmapByteOrderDefault); // Bitmap info flags
  
  CGContextDrawImage(contextRef, CGRectMake(0, 0, cols, rows), image.CGImage);
  CGContextRelease(contextRef);
  
  return cvMat;
}

-(UIImage *)UIImageFromCVMat:(cv::Mat)cvMat withOrientation:(UIImageOrientation) orientation
{
  NSData *data = [NSData dataWithBytes:cvMat.data length:cvMat.elemSize()*cvMat.total()];
  CGColorSpaceRef colorSpace;
  if (cvMat.elemSize() == 1) {
    colorSpace = CGColorSpaceCreateDeviceGray();
  } else {
    colorSpace = CGColorSpaceCreateDeviceRGB();
  }
  CGDataProviderRef provider = CGDataProviderCreateWithCFData((__bridge CFDataRef)data);
  // Creating CGImage from cv::Mat
  CGImageRef imageRef = CGImageCreate(cvMat.cols,                                 //width
                                      cvMat.rows,                                 //height
                                      8,                                          //bits per component
                                      8 * cvMat.elemSize(),                       //bits per pixel
                                      cvMat.step[0],                            //bytesPerRow
                                      colorSpace,                                 //colorspace
                                      kCGImageAlphaNone|kCGBitmapByteOrderDefault,// bitmap info
                                      provider,                                   //CGDataProviderRef
                                      NULL,                                       //decode
                                      false,                                      //should interpolate
                                      kCGRenderingIntentDefault                   //intent
                                      );
  // Getting UIImage from CGImage
  UIImage *finalImage = [UIImage imageWithCGImage:imageRef scale:1.0 orientation:orientation];
  CGImageRelease(imageRef);
  CGDataProviderRelease(provider);
  CGColorSpaceRelease(colorSpace);
  return finalImage;
}


- (UIImage *)decodeBase64ToImage:(NSString *)strEncodeData {
  NSData *data = [[NSData alloc]initWithBase64EncodedString:strEncodeData options:NSDataBase64DecodingIgnoreUnknownCharacters];
  return [UIImage imageWithData:data];
}

- (NSString *)encodeImageToBase64:(UIImage *)image {
  //return [UIImageJPEGRepresentation(image, 1.0) base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
  return [UIImagePNGRepresentation(image) base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
}

@end
