import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Image
} from "react-native";
import {NativeModules} from 'react-native'

import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";


import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';

class VideoPlayer2 extends Component {
  static navigationOptions = {
    title: "Video"
  };

  render() {
    return (
      <View style={styles.backgroundVideo}>
        <Video
          source={require("../Videos/InstiV2.mp4")}
          ref={(ref) => {
             this.player = ref
           }}
           onLoad={(data) => { this.player.presentFullscreenPlayer(); }}
           onEnd={(data) => { this.player.dismissFullscreenPlayer(); }}
           style={styles.backgroundVideo}
        />

        <CenterTextBox /><CenterTextBox /><CenterTextBox />
        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions")} >
          Next
        </GreenRoundButton>
      </View>
    );
  }
  /*onLoad(data) {
    console.log("triggered!");
    this.player.presentFullscreenPlayer();
  }*/
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

export { VideoPlayer2 };
