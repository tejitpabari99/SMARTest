import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import Video from "react-native-video";

class GuestVideo extends Component {
  static navigationOptions = {
    title: "Video PlaceHolder"
  };
  render() {
    return (
      <View>
        <Video
          source={require("../Videos/InstiV2.mp4")}
        />

        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />

        <Button
          onPress={() => this.props.navigation.navigate("GuestInstructions")}
          title="Skip to step by step instructions"
        />
      </View>
    );
  }
}

export default GuestVideo;
