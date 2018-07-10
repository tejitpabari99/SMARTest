import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, video } from "react-native";

class Instructions8 extends Component {
  static navigationOptions = {
    title: "Collect Blood"
  };
  render() {
    return (
      <View>
        <Text> Squeeze your finger to extrract blood. </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> Grab solution tube #1 and drop the </Text>
        <Text> the blood directly into the tube. </Text>
        <Text> </Text>
        <Image
          source={require("../Images/9.png")}
          style={{ width: 370, height: 250 }}
        />
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> MAKE SURE TO GET A FEW DROPS OF </Text>
        <Text> BLOOD INTO THE TUBE. </Text>
        <Text> </Text>

        <Button
          onPress={() => this.props.navigation.navigate("Instructions9")}
          title="Next"
        />
      </View>
    );
  }
}

export default Instructions8;
