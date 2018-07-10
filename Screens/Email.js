import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

class Email extends Component {
  static navigationOptions = {
    title: "Share by Email"
  };
  render() {
    return (
      <View>
        <Text> Enter the email adress of the recieptient </Text>

        <Text />
        <Text />
        <Text />

        <Text />
        <Text />
        <Text />
        <Button
          onPress={() => this.props.navigation.navigate("LinkURL")}
          title="Send Results"
        />
        <Text />
      </View>
    );
  }
}

export default Email;
