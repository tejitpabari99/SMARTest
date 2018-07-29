import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Platform} from 'react-native';
import { RNCamera } from 'react-native-camera';
import OpenCV from './OpenCV';

class GuestTakePicture extends Component {
   static navigationOptions = {
    title: 'Guest Take Picture',
  };

  constructor() {
    super();
    this.state = {
      previewImageData: '',
      enablePreview: false,
      canContinue: false
   };
  }

  render() {
    if (this.state.enablePreview) {
      return (
        <View style={styles.container}>
          <Image
            style={ styles.preview }
            source={{ uri: `data:image/png;base64,${this.state.previewImageData}` }}
            resizeMode="contain"
          />
          <View style={styles.buttonView}>
            <TouchableOpacity
                onPress={this.retake.bind(this)}
                style={styles.button}
            >
                <Text style={{fontSize: 14}}> Retake </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={this.continue.bind(this)}
                style={styles.button}
            >
                <Text style={{fontSize: 14}}> Continue </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.camera}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <Image
          source={require("../Images/ScanOverlayRectangle_2.png")}
          style={styles.overlayRect}
          resizeMode="contain"
        />
        <View style={styles.topText}>
          <Text style={{ alignSelf: 'center', color: '#f00', fontWeight: 'bold' }}>Please align the edges of the test to </Text>
          <Text style={{ alignSelf: 'center', color: '#f00', fontWeight: 'bold' }}>the center of the square below:</Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={styles.button}
          >
              <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      alert("Processing... Please wait.");
      this.presentBase64ImageData(data.base64);
      /*this.checkForBlurryImage(data.base64).then(blurryPhoto => {
        if (blurryPhoto) {
          alert('Photo is blurred!\nPlease take a new one.');
        }
      }).catch(err => {
        console.log('err', err)
      });*/
      this.getProcessedImage(data.base64).then(processedImageInBase64 => {
        alert("Processed image is back!");
        this.presentBase64ImageData(processedImageInBase64);
        
        /*console.log("Results: "+results);
        JSON.parse(results);
        if (results.error != null ) {
          alert(results.error + "Please take a new one.");
          this.retake();
        }*/
        // Store results with Firebase
        this.state.canContinue = true;
        //this.forceUpdate();
      }).catch(err => {
        console.log('err', err);
      });
    }
  };

  checkForBlurryImage(imageAsBase64) {
    return new Promise((resolve, reject) => {
      if (Platform.OS === 'android') {
        OpenCV.checkForBlurryImage(imageAsBase64, error => {
          // error handling
        }, msg => {
          resolve(msg);
        });
      } else {
        OpenCV.checkForBlurryImage(imageAsBase64, (error, dataArray) => {
          resolve(dataArray[0]);
        });
      }
    });
  }

  getProcessedImage(imageAsBase64) {
    return new Promise((resolve, reject) => {
      if (Platform.OS === 'android') {
        OpenCV.getProcessedImage(imageAsBase64, error => {
          // error handling
        }, msg => {
          resolve(msg);
        });
      } else {
        OpenCV.getProcessedImage(imageAsBase64, (error, dataArray) => {
          resolve(dataArray[0]);
        });
      }
    });
  }

  presentBase64ImageData(imgData) {
    this.state.previewImageData = imgData;
    this.state.enablePreview = true;
    this.forceUpdate();
  }

  retake() {
    this.state.enablePreview = false;
    this.state.previewImageData = '';
    this.forceUpdate();
  }

  continue() {
    if (!this.state.canContinue) {
      alert("Please take a qualified photo to continue!");
      return;
    }
    this.props.navigation.navigate ('PreResults');
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  camera: {
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    height: '100%'
  },
  overlayRect: {
    position: 'absolute',
    alignSelf: 'center',
    top: '10%',
    width: '75%',
    height: '75%'
  },
  topText: {
    position: 'absolute',
    top: '2%',
    alignSelf: 'center'
  },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    width: '40%',
    maxWidth: 120,
    borderRadius: 5,
    padding: 15,
    marginLeft: 5,
    marginRight: 5,
    paddingHorizontal: 20,
    alignSelf: 'center',
    alignItems: 'center'
  },
  buttonView: {
    position: 'absolute',
    bottom: '2%',
    width: '100%',
    maxWidth: 300,
    marginBottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  preview: {
    position: 'absolute',
    alignSelf: 'center',
    top: '5%',
    width: '80%',
    height: '80%'
  }
});

export { GuestTakePicture };
