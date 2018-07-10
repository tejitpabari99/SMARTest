import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, video } from "react-native";

class GuestInstructions3 extends Component {
  static navigationOptions = {
    title: "Prepare Test"
  };
  render() {
    return (
      <View>
        <Text> PICK UP THE TEST POUCH AND TEAR IT </Text>
        <Text> OPEN. PLACE THE TEST ON A FLAT </Text>
        <Text> SURFACE</Text>
        <Text />
        <Text />
        <Image
          source={require("../Images/4A.png")}
          style={{ width: 193, height: 110 }}
        />
        <Text>Open Gauze packet and place </Text>
        <Text> it nearby for future uses</Text>
        <Text />
        <Image
          source={require("../Images/4B.jpg")}
          style={{ width: 193, height: 110 }}
        />
        <Text>Make sure to oreint the test so the lip </Text>
        <Text> faces towards you</Text>
        <Button
          onPress={() => this.props.navigation.navigate("GuestInstructions4")}
          title="Next"
        />
      </View>
    );
  }
}

export default GuestInstructions3;
