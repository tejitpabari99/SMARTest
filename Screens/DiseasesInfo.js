import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, video } from "react-native";

class DiseasesInfo extends Component {
  static navigationOptions = {
    title: "Diseases Info"
  };
  render() {
    return (
      <View>
        <Text> Click on the links to learn more about HIV </Text>
        <Text> and syphillis. </Text>
        <Text> </Text>
        <Button
          onPress={() => this.props.navigation.navigate("HIVInfo")}
          title="HIV Information"
        />
        <Button
          onPress={() => this.props.navigation.navigate("SyphilisInfo")}
          title="Syphilis Information"
        />
        <Button
          onPress={() => this.props.navigation.navigate("Resources")}
          title="Back"
        />
      </View>
    );
  }
}

export { DiseasesInfo };
