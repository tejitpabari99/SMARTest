import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, video } from "react-native";

class TestAccuracy extends Component {
  static navigationOptions = {
    title: "Test Accuracy"
  };
  render() {
    return (
      <View>
        <Text> The INSTI Multiplex is extremely </Text>
        <Text> accurate when performed correctly </Text>
        <Text> </Text>
        <Text> It has been shown to have a sensitivity of </Text>
        <Text>
          {" "}
          99.6% and a specificity of 99.3% for the detection of HIV-1 and HIV-2
          antibodies in{" "}
        </Text>

        <Text> finger-stick samples, and a 100% </Text>
        <Text> Sensitivity and specificity for the detection </Text>
        <Text> of Secondary Syphillis </Text>
        <Button
          onPress={() => this.props.navigation.navigate("GuestResources")}
          title="Back"
        />
      </View>
    );
  }
}

export { TestAccuracy };
