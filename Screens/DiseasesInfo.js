import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, video, Linking } from "react-native";

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
          onPress={() => Linking.openURL('https://www.cdc.gov/hiv/basics/index.html') }
          title="HIV Information"
        />
        <Button
          onPress={() => Linking.openURL('https://www.cdc.gov/tuskegee/syphilis.htm') }
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
