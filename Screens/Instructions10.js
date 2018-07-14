import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, Button, Image, video } from "react-native";

class Instructions10 extends Component {
  static navigationOptions = {
    title: "Simple Transfer"
  };
  render() {
    return (
      <ScrollView>
        <Text> Recap solution tube #1 and mix </Text>
        <Text> contents by inverting several times.</Text>
        <Text> </Text>
        <Text> </Text>
        <Image
          source={require("../Images/11A.png")}
          style={{ width: 370, height: 250 }}
        />

        <Text> pour the contents to the center </Text>
        <Text> of the test membrane. </Text>
        <Text> </Text>
        <Image
          source={require("../Images/11B.png")}
          style={{ width: 370, height: 250 }}
        />

        <Button
          onPress={() => this.props.navigation.navigate("Instructions11")}
          title="Next"
        />
      </ScrollView>
    );
  }
}

export { Instructions10 };
