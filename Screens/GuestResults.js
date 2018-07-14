import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

class GuestResults extends Component {
  static navigationOptions = {
    title: "RESULTS"
  };
  render() {
    return (
      <View>
        <Text> Guest Results</Text>
        <Text> </Text>

        <Text> </Text>

        <Text> </Text>

        <Text> </Text>

        <Button
          onPress={() => this.props.navigation.navigate("Resources")}
          title="Resources"
        />

        <Text />
        <Text />
        <Text> Any positive results should be confirmed by a </Text>
        <Text> healthcare provider.</Text>
        <Text />
        <Text />
        <Text>Negative results may not detect a recent infection. For</Text>
        <Text> for more information, click on the resources tab.</Text>
      </View>
    );
  }
}

export {GuestResults};
