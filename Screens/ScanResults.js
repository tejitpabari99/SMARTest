import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Platform} from 'react-native';
import { RNCamera } from 'react-native-camera';
import OpenCV from './OpenCV';

class ScanResults extends Component {
  static navigationOptions = {
    title: 'Scan Results',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>                    Please align the edges of the test to       </Text>
        <Text>                      the center of the square below:           </Text>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
          <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style = {styles.capture}
          >
              <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
        <Button onPress= {() => this.props.navigation.navigate ('ScanResults')}
          title="Retake"/>
        <Button onPress= {() => this.props.navigation.navigate ('PreResults')}
          title="Continue"/>
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      alert("base64 Image:\n"+data.uri);
      this.checkForBlurryImage(data.base64).then(blurryPhoto => {
        if (blurryPhoto) {
          alert('Photo is blurred!\nPlease take a new one.');
        }
        alert('Photo is clear!');
      }).catch(err => {
        console.log('err', err)
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

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

export default ScanResults;
