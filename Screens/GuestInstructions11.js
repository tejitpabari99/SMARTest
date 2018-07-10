import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, video } from "react-native";

class GuestInstructions11 extends Component {
  static navigationOptions = {
    title: "Running the Test (1)"
  };
  render() {
    return (
      <View>
        <Text> Pick up solution tube #2 and mix the </Text>
        <Text> contents by inverting several times.</Text>
        <Text> </Text>
        <Text> </Text>
        <Image
          source={require("../Images/12A.jpg")}
          style={{ width: 193, height: 110 }}
        />

        <Text> Remove the cap and pour contents </Text>
        <Text> into the center of the test . </Text>
        <Text> </Text>
        <Image
          source={require("../Images/12B.png")}
          style={{ width: 193, height: 110 }}
        />

        <Button
          onPress={() => this.props.navigation.navigate("GuestInstructions12")}
          title="Next"
        />
      </View>
    );
  }
}

export default GuestInstructions11;
