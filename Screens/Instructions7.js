import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, Button, Image, video } from "react-native";

class Instructions7 extends Component {
  static navigationOptions = {
    title: "Extract Blood"
  };
  render() {
    return (
      <ScrollView>
        <Text> PLace tip of lancet on the clean finger. </Text>
        <Text> Firmly Push Down on the other end. </Text>
        <Text />
        <Text />

        <Image
          source={require("../Images/8A.png")}
          style={{ width: 370, height: 250 }}
        />
        <Text> </Text>
        <Text> </Text>
        <Text> You will feel a momentary pinprick. </Text>
        <Text> After discard lancet in trash </Text>
        <Text> completely.</Text>
        <Image
          source={require("../Images/8B.png")}
          style={{ width: 370, height: 250 }}
        />

        <Button
          onPress={() => this.props.navigation.navigate("Instructions8")}
          title="Next"
        />
      </ScrollView>
    );
  }
}

export { Instructions7 };
