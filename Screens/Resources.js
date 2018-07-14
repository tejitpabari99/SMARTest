import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

class Resources extends Component {
  static navigationOptions = {
    title: "Resources"
  };
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate("TestAccuracy")}
          title="Test Accuracy"
        />
        <Text />
        <Button
          onPress={() => this.props.navigation.navigate("WindowPeriod")}
          title="Window Period"
        />
        <Text />
        <Text />
        <Button
          onPress={() => this.props.navigation.navigate("DiseasesInfo")}
          title="Diseases Info"
        />
        <Text />
        <Text />
        <Button
          onPress={() => this.props.navigation.navigate("NearbyClinics")}
          title="Nearby Clinics"
        />
      </View>
    );
  }
}

export { Resources };
