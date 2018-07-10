import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, video } from "react-native";

class Instructions12 extends Component {
  static navigationOptions = {
    title: "Running the Test (2)"
  };
  render() {
    return (
      <View>
        <Text> Pick up solution tube #3 and mix the </Text>
        <Image
          source={require("../Images/13A.jpg")}
          style={{ width: 370, height: 250 }}
        />

        <Text> Remove the cap and pour on to</Text>
        <Text> the center of the test membrane. </Text>
        <Text> </Text>
        <Text> </Text>

        <Text> Remove the cap and pour contents </Text>
        <Text> into the center of the test . </Text>
        <Text> </Text>
        <Image
          source={require("../Images/13B.png")}
          style={{ width: 370, height: 250 }}
        />

        <Button
          onPress={() => this.props.navigation.navigate("ScanResults")}
          title="Next"
        />
      </View>
    );
  }
}

export default Instructions12;
