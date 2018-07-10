import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, video } from "react-native";

class Instructions2 extends Component {
  static navigationOptions = {
    title: "Prepare Gauze"
  };
  render() {
    return (
      <View>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text />
        <Text />
        <Image
          source={require("../Images/2.png")}
          style={{ width: 380, height: 200 }}
        />
        <Text> Open Gauze packet and place </Text>
        <Text> it nearby for future uses</Text>
        <Text />

        <Button
          onPress={() => this.props.navigation.navigate("Instructions3")}
          title="Next"
        />
      </View>
    );
  }
}

export default Instructions2;
