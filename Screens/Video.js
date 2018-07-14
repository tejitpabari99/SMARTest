import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Image,
  video
} from "react-native";

// import { Video } from "expo";
// import VideoPlayer from "@expo/videoplayer";

class Video extends Component {
  static navigationOptions = {
    title: "Video"
  };

  render() {
    return (
      <View>
        <Text> This is a video placeholder</Text>
        <Text> Removed the Video Place holder</Text>
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
}

export { Video };
