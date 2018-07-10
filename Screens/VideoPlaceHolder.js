import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Image
} from "react-native";

import Video from "react-native-video";

class VideoPlaceHolder extends Component {
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

        <Text />
        <Text />
        <Text />
        <Text />

        <Button
          onPress={() => this.props.navigation.navigate("Instructions")}
          title="NEXT"
        />
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

export default VideoPlaceHolder;
