import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  NativeModules
} from "react-native";

import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';


import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';

class VideoPlayer2 extends Component {
  static navigationOptions = {
    title: "Video"
  };
// source={require("../assets/Videos/InstiV2.mp4")}
  render() {
    return (
      <View style={styles.backgroundVideo}>
        <Video
          source={{uri: 'https://s3.amazonaws.com/smarttest-app/InstiV2.mp4'}}
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
        <FooterTab>
              <Button onPress={() => this.props.navigation.navigate("HomeScreen")}>
                                    <Text>New Test</Text>
                                    </Button>

              <Button onPress={() => this.props.navigation.navigate("Resources")}>
                                    <Text>Resources</Text>
                                    </Button>

              <Button onPress={() => this.props.navigation.navigate("SavedResults")}>
                                    <Text>Results</Text>
                                    </Button>

        </FooterTab>
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
