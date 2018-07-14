import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, video } from "react-native";

class Instructions5 extends Component {
  static navigationOptions = {
    title: "Sterilize Finger"
  };
  render() {
    return (
      <View>
        <Text> CHOOSE A FINGER TO PRICK. </Text>
        <Text> WE RECOMMEND ONE ON YOUR NON-DOMINANT </Text>
        <Text> HAND. </Text>
        <Image
          source={require("../Images/8B.png")}
          style={{ width: 370, height: 250 }}
        />
        <Text />

        <Text />

        <Text> MASSAGE YOUR FINGER TO STIMULATE BLOOD FLOW </Text>
        <Text> </Text>
        <Text />

        <Button
          onPress={() => this.props.navigation.navigate("Instructions6")}
          title="Next"
        />
      </View>
    );
  }
}

export { Instructions5 };
