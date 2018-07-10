import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, Video } from "react-native";

class TestSetup extends Component {
  static navigationOptions = {
    title: "Test Options"
  };
  render() {
    return (
      <View>
        <Text> SELECT TESTING MODE BELOW : </Text>

        <Button
          onPress={() => this.props.navigation.navigate("VideoInfo")}
          title="JUST ME "
        />

        <Button
          onPress={() => this.props.navigation.navigate("GuestTestSelection")}
          title="JUST MY PARTNER "
        />

        <Button
          onPress={() => this.props.navigation.navigate("DuoTest")}
          title="DUO TEST "
        />
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
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

export default TestSetup;
