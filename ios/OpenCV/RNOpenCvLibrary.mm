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

RCT_EXPORT_METHOD(getImageMask:(NSString *)imageAsBase64 callback:(RCTResponseSenderBlock)callback) {
  UIImage* image = [self decodeBase64ToImage:imageAsBase64];
  NSString* maskedImageInBase64 = [self getImageMask:image];
  
  id objects[] = { maskedImageInBase64 };
  NSUInteger count = sizeof(objects) / sizeof(id);
  NSArray *dataArray = [NSArray arrayWithObjects:objects
                                           count:count];
  
  callback(@[[NSNull null], dataArray]);
}

RCT_EXPORT_METHOD(getTestResults:(NSString *)imageAsBase64 callback:(RCTResponseSenderBlock)callback) {
  UIImage* image = [self decodeBase64ToImage:imageAsBase64];
  NSString* testResults = [self getTestResults:image];
  
  id objects[] = { testResults };
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
  cv::getStructuringElement(cv::MORPH_RECT, cv::Size(3,3));
  NSLog(@"Size: %dx%d", kernel.rows, kernel.cols);
  //NSLog(@"row1: %d %d ", kernel.rows, kernel.cols);
  cv::morphologyEx(mask, processedMask, cv::MORPH_OPEN, kernel);
  cv::pyrUp(processedMask, processedMask);
  for (int i = 0; i < 15; i++) {
    cv::medianBlur(processedMask, processedMask, 15);
  }
  cv::threshold(processedMask, processedMask, 30.0, 255.0, cv::THRESH_BINARY);
  cv::pyrDown(processedMask, processedMask);
  cv::threshold(processedMask, processedMask, 127.0, 255.0, cv::THRESH_BINARY);
  
  return processedMask;
}

- (cv::Mat) detectSmallestCircle:(cv::Mat) mask {
  cv::Mat processedMask;
  
  /*
   def detect_smallest_circle(thresholded_image):
   
     # Set up the detector with appropriate parameters for circle detection.
     circle_detector_params = cv2.SimpleBlobDetector_Params()
   
     circle_detector_params.filterByArea = True
     circle_detector_params.minArea = 200     # 800
     circle_detector_params.maxArea = 7000    # 7000
   
     circle_detector_params.filterByCircularity = True
     circle_detector_params.minCircularity = 0.5
   
     circle_detector_params.filterByInertia = True
     circle_detector_params.minInertiaRatio = 0.5
   
     return detect_blob(thresholded_image, circle_detector_params)
   */
  
  return processedMask;
}

- (cv::Mat) detectDots:(cv::Mat) mask {
  cv::Mat processedMask;
  
  /* TODO: Implementation not so urgent.
   def detect_dot(thresholded_image, center = None, radius = None):
   
     # Inverse image b/c SimpleBlobDetector only detects black areas
     thresholded_image = thresholded_image==0
   
     # Set up the detector with appropriate parameters for dot detection.
     dot_detector_params = cv2.SimpleBlobDetector_Params()
   
     dot_detector_params.filterByArea = True
     dot_detector_params.minArea = 20
     dot_detector_params.maxArea = 400
   
     dot_detector_params.filterByCircularity = True
     dot_detector_params.minCircularity = 0.5
   
     dot_detector_params.filterByInertia = True
     dot_detector_params.minInertiaRatio = 0.5
   
     dots = detect_blob(thresholded_image, dot_detector_params)
   
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
  
  return processedMask;
}

- (cv::Mat) detectBlob:(cv::Mat) mask {
  cv::Mat processedMask;
  
  /* TODO: To implement this method!
   def detect_blob(thresholded_image, blob_detector_params):
   
     if thresholded_image.mean() <= 1:
     thresholded_image = thresholded_image * 255
   
     if not thresholded_image.dtype == 'uint8':
     thresholded_image = thresholded_image.astype('uint8')
   
     # Set up the detector with given parameters.
     detector = cv2.SimpleBlobDetector_create(blob_detector_params)
   
     # Detect blobs.
     keypoints = detector.detect(thresholded_image)
   
     return keypoints
   */
  
  return processedMask;
}

- (cv::Mat) drawKeypoints:(cv::Mat) keypoints onImage:(cv::Mat) image {
  cv::Mat processedMask;
  
  // cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS
  // ensures the size of the circle corresponds to the size of blob
  
  /* TODO: To implement this method!
   def draw_keypoints(keypoints, image):
     # cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS ensures the size of the circle corresponds to the size of blob
     return cv2.drawKeypoints(image, keypoints, np.array([]), (0,0,255), cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS)
   */
  
  return processedMask;
}

- (NSString *) getImageMask:(UIImage *) image {
  // converting UIImage to grayed OpenCV format - Mat
  cv::Mat matImage = [self convertUIImageToCVMat:image];
  cv::Mat matImageGrey;
  cv::cvtColor(matImage, matImageGrey, CV_BGR2GRAY);
  
  // getting thresholded image mask and denoise
  cv::Mat thresholdMask;
  cv::adaptiveThreshold(matImageGrey, thresholdMask, 255.0, cv::ADAPTIVE_THRESH_MEAN_C, cv::THRESH_BINARY_INV, 13.0, 2.0);
  cv::Mat denoisedMask = [self denoise:thresholdMask];
  
  return [self encodeImageToBase64: [self UIImageFromCVMat: denoisedMask]];
}

- (NSString *) getTestResults:(UIImage *) image {
  
  /* TODO: To implement this method!
   
   // Get circle and crop with bounding rect, then send image to server.
   
   circles_detected = detect_smallest_circle(opened_sm)
   
   if len(circles_detected) < 1:
   circles_detected = detect_smallest_circle(opened_mask)
   if len(circles_detected) < 1:
   #print("Failed to detect circle!")
   return img
   
   img_with_circle = draw_keypoints(circles_detected, opened_mask)
   
   dots_detected = detect_dot(opened_mask, circles_detected[0].pt, circles_detected[0].size/2)
   
   img_with_dots = draw_keypoints(dots_detected, opened_mask)
   
   # Show keypoints
   cv2.imshow("img_with_circle", img_with_circle)
   cv2.imshow("img_with_dots", img_with_dots)
   */
  return @"hello";
}



// MARK: - Utility Functions for Image Type Conversions

- (cv::Mat)convertUIImageToCVMat:(UIImage *)image {
  CGColorSpaceRef colorSpace = CGImageGetColorSpace(image.CGImage);
  CGFloat cols = image.size.width;
  CGFloat rows = image.size.height;
  
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

-(UIImage *)UIImageFromCVMat:(cv::Mat)cvMat
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
  UIImage *finalImage = [UIImage imageWithCGImage:imageRef];
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
  return [UIImagePNGRepresentation(image) base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
}

@end
