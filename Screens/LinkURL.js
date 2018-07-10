import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

class LinkURL extends Component {
  static navigationOptions = {
    title: "https:MyResults.com"
  };
  render() {
    return (
      <View>
        <Text> This whole page will be the users bitly liked page. </Text>
      </View>
    );
  }
}

export default LinkURL;
