import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, video } from "react-native";

class TestSelection extends Component {
  static navigationOptions = {
    title: "Select Test"
  };
  render() {
    return (
      <View>
        <Text>SELECT A TEST BELOW : </Text>
        <Text> </Text>
        <Text> </Text>

        <Button
          onPress={() => this.props.navigation.navigate("TestSetup")}
          title="INSTI HIV & SYPHILLIS TEST"
        />
      </View>
    );
  }
}

export default TestSelection;
