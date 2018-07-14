import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Image
} from "react-native";

class VideoInfo extends Component {
  static navigationOptions = {
    title: "Video Info"
  };

  render() {
    return (
      <View>
        <Text> First you will see a short instructional video </Text>
        <Text> that provides an overview of the test. </Text>
        <Text />

        <Text> Then you will see step-by-step instructions </Text>
        <Text> to run the test yourself. </Text>
        <Text />
        <Text />
        <Text />
        <Button
          onPress={() => this.props.navigation.navigate("Video")}
          title="NEXT"
        />

        <Text />
        <Text />
        <Text />
        <Text />
      </View>
    );
  }
}

export { VideoInfo };
