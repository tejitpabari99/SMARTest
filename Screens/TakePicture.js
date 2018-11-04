import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Platform} from 'react-native';
import { Spinner } from 'native-base';
import axios from "axios";
import { Camera, Permissions, ImageManipulator } from 'expo';

class TakePicture extends Component {
  static navigationOptions = {
    title: 'Take Picture'
  };

  constructor() {
    super();
    this.state = {
      previewImageData: '',
      exif: '',
      enablePreview: false,
      canContinue: false,
      loading: false,
      error: false,
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
   };
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  checkUserSelection = () => {
    if (global.userSelection === 2) {
      return (
        <TouchableOpacity
            onPress={() => this.preShowGuestCamera()}
            style={styles.button}
        >
            <Text style={{fontSize: 14}}> Guest Picture </Text>
        </TouchableOpacity>
      );
    }
    else {
      return (
        <TouchableOpacity
            onPress={() => this.preShowResult()}
            style={styles.button}
        >
            <Text style={{fontSize: 14}}> Results </Text>
        </TouchableOpacity>
      );
    }
  }

  preShowResult() {
    this.state.loading = true;
    this.forceUpdate();
    this.showResult();
  }

  preShowGuestCamera() {
    this.state.loading = true;
    this.forceUpdate();
    this.showGuestCamera();
  }

  showResult = () => {
    // var newVar = {};
    // newVar["imageData"] = this.state.previewImageData
    // newVar["userResult"] = 7
    // this.props.navigation.navigate("PreResults", {newVar})

    var that = this;
    // console.log(that.state.previewImageData)
    // console.log(imageDataToSend2)
    // console.log(that.state.exif)
    axios.post("https://us-central1-smartimageprocessing.cloudfunctions.net/testfunction",
      {
        image: that.state.previewImageData,
        exif: that.state.exif
      }
    )
    .then(function(response) {
      var newVar = {};
      // console.log(response)
      newVar["userResult"] = response.request._response
      newVar["imageData"] = that.state.previewImageData
      newVar["exif"] = that.state.exif
      that.props.navigation.navigate("PreResults", {newVar})
    })
    .catch(function(error) {
      console.log(error)
      that.state.error = true
      that.retake()
    })
  }

  showGuestCamera = () => {
    var that = this;
    var imageDataToSend2 = that.state.previewImageData
    // console.log(imageDataToSend2)
    axios.post("https://us-central1-smartimageprocessing.cloudfunctions.net/testfunction",
      {
        image: that.state.previewImageData,
        exif: that.state.exif
      }
    )
    .then(function(response) {
      var newVar = {};
      newVar["userResult"] = response.request._response
      newVar["imageData"] = that.state.previewImageData
      that.props.navigation.navigate("GuestTakePicture", {newVar})
    })
    .catch(function(error) {
      console.log(error)
      that.state.error = true
      that.retake()
    })
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
          {this.renderButton()}
        </View>
      );
    }
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Camera
              ref={ref => {
                this.camera = ref;
              }}
              style = {styles.camera}
              type={Camera.Constants.Type.back}
              flashMode={Camera.Constants.FlashMode.off}
          />
          <Image
            source={require("../Images/ScanOverlayRectangle_2.png")}
            style={styles.overlayRect}
            resizeMode="contain"
          />
          <View style={styles.topText}>
            <Text style={{ alignSelf: 'center', color: '#f00', fontWeight: 'bold' }}>Place test kit on a dark, flat background</Text>
            <Text style={{ alignSelf: 'center', color: '#f00', fontWeight: 'bold' }}>and take a photo within 5 minutes.</Text>
            <Text />
            <Text style={{ alignSelf: 'center', color: '#f00', fontWeight: 'bold' }}>Please align the edges of the test to </Text>
            <Text style={{ alignSelf: 'center', color: '#f00', fontWeight: 'bold' }}>the center of the square below:</Text>
            {this.renderError()}
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
  }

  renderError = () => {
    if(this.state.error){
      return <Text style={{ alignSelf: 'center', color: '#f00', fontWeight: 'bold', marginTop: 16 }}>Please retake the picture.</Text>
    }
  }

  renderButton = () => {
    if(!this.state.loading) {
      return (
        <View style={styles.buttonView}>
          <TouchableOpacity
              onPress={this.retake.bind(this)}
              style={styles.button}
          >
              <Text style={{fontSize: 14}}> Retake </Text>
          </TouchableOpacity>
          {this.checkUserSelection()}
        </View>
      )
    }
    else {
      return (
        <View style={styles.spinnerView}>
          <Text style={{ alignSelf: 'center', color: '#f00', fontWeight: 'bold', marginTop: 26, fontSize: 15 }}>Please wait while the results are</Text>
          <Text style={{ alignSelf: 'center', color: '#f00', fontWeight: 'bold', fontSize: 15 }}>calculated.</Text>
          <Spinner color='red' style={{ alignSelf: 'center' }}/>
        </View>
      )
    }
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true, exif: true };
      const data = await this.camera.takePictureAsync(options);
      // this.presentBase64ImageData(data.base64);
      this.alterImage(data.uri, data.exif)

    }
  };

  alterImage = async (uri, exif) => {
    const manipResult = await ImageManipulator.manipulate(
      uri,
      [{resize: {height: 800}}],
      {base64: true}
    )
    this.presentBase64ImageData(manipResult.base64, exif);
  }

  presentBase64ImageData(imgData, exif) {
    this.state.previewImageData = imgData;
    this.state.exif = exif;
    this.state.enablePreview = true;
    this.state.error = false;
    this.state.loading = false;
    this.forceUpdate();
  }

  retake() {
    this.state.enablePreview = false;
    this.state.previewImageData = '';
    this.forceUpdate();
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
  spinnerView: {
    position: 'absolute',
    bottom: '10%',
    width: '100%',
    maxWidth: 300,
    marginBottom: 20,
    alignSelf: 'center',
  },
  preview: {
    position: 'absolute',
    alignSelf: 'center',
    top: '5%',
    width: '80%',
    height: '80%'
  }
});

export { TakePicture };
