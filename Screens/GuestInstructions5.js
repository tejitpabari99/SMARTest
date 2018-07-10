import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, video } from "react-native";

class GuestInstructions5 extends Component {
  static navigationOptions = {
    title: "Sterilize Finger"
  };
  render() {
    return (
      <View>
        <Text> CHOOSE A FINGER TO PRICK. WE </Text>
        <Text> RECOMMEND ONE ON YOUR </Text>
        <Text> NON-DOMINANT HAND. </Text>
        <Image
          source={require("../Images/8B.png")}
          style={{ width: 193, height: 110 }}
        />
        <Text> MASSAGE YOUR FINGER TO STIMULATE</Text>
        <Text> BLOOD FLOW </Text>
        <Text />

        <Button
          onPress={() => this.props.navigation.navigate("GuestInstructions6")}
          title="Next"
        />
      </View>
    );
  }
}

export default GuestInstructions5;
