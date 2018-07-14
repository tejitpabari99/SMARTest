import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, Button, Image, video } from "react-native";

class Instructions12 extends Component {
  static navigationOptions = {
    title: "Running the Test (2)"
  };

  checkUserSelection = () => {
    if (global.userSelection === 0 || global.userSelection === 2) {
      this.props.navigation.navigate("TakePicture");
    } else if (global.userSelection === 1) {
      this.props.navigation.navigate("GuestTakePicture");
    }
  };

  render() {
    return (
      <ScrollView>
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
          onPress={() => this.checkUserSelection()}
          title="Next"
        />
      </ScrollView>
    );
  }
}

export { Instructions12 };
