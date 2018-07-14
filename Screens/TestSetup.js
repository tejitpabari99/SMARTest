import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, Video } from "react-native";

class TestSetup extends Component {
  static navigationOptions = {
    title: "Test Options"
  };
  me = () => {
    global.userSelection = 0;
    this.props.navigation.navigate("VideoInfo");
  };
  partner = () => {
    global.userSelection = 1;
    this.props.navigation.navigate("VideoInfo");
  };
  duo = () => {
    global.userSelection = 2;
    this.props.navigation.navigate("VideoInfo");
  };

  render() {
    return (
      <View>
        <Text> SELECT TESTING MODE BELOW : </Text>

        <Button
          onPress={() => this.me()}
          title="JUST ME "
        />

        <Button
          onPress={() => this.partner()}
          title="JUST MY PARTNER "
        />

        <Button
          onPress={() => this.duo()}
          title="DUO TEST "
        />
        <Text> NOTE: </Text>
        <Text>Just My partner will lead to the guest account mode </Text>
        <Text> where results cannot be saved. </Text>
        <Text> </Text>
        <Text> Duo Test Mode will enable simultaneous </Text>
        <Text> testing (e.g you and your partner), however the Partners </Text>
        <Text> Results cannot be saved.</Text>
      </View>
    );
  }
}

export { TestSetup };
