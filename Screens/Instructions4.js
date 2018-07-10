import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, video } from "react-native";

class Instructions4 extends Component {
  static navigationOptions = {
    title: "Prepare Sample Collector"
  };
  render() {
    return (
      <View>
        <Text> PICK UP THE SOLUTION TUBE #1 WITH </Text>
        <Text> THE RED CAP AND TWIST OPEN THE CAP. </Text>
        <Text />
        <Text />
        <Text />
        <Text />
        <Image
          source={require("../Images/redVile.jpg")}
          style={{ width: 370, height: 250 }}
        />
        <Text> PLACE IT NEARBY FOR FUTURE STEPS</Text>
        <Text> BE CAREFULL NOT TO KNOCK IT OVER! </Text>
        <Text />
        <Text />
        <Text> </Text>

        <Button
          onPress={() => this.props.navigation.navigate("Instructions5")}
          title="Next"
        />
      </View>
    );
  }
}

export default Instructions4;
