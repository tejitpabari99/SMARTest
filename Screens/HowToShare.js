import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

class HowToShare extends Component {
  static navigationOptions = {
    title: "RESULTS"
  };
  render() {
    return (
      <View>
        <Text> This is a personalized link with the date and test </Text>
        <Text> results you slected.You can copy and paste </Text>
        <Text> the link into a textor any messaging app,or </Text>
        <Text> email it to a reciepient of your choice </Text>
        <Text />
        <Text>https:cdc.com</Text>

        <Text />
        <Text />
        <Text />

        <Button
          onPress={() => this.props.navigation.navigate("LinkURL")}
          title="Copy Link"
        />
        <Text />
        <Button
          onPress={() => this.props.navigation.navigate("ShareMethods")}
          title="Email Link"
        />
      </View>
    );
  }
}

export default HowToShare;
