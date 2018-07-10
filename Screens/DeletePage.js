import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

class DeletePage extends Component {
  static navigationOptions = {
    title: "DELETE PAGE"
  };
  render() {
    return (
      <View>
        <Text> </Text>

        <Text> </Text>

        <Button
          onPress={() => this.props.navigation.navigate("DeletePage")}
          title="Delete All"
        />
        <Text />
        <Button
          onPress={() => this.props.navigation.navigate("DeletePage")}
          title="Delete HIV Results Only"
        />
        <Text />
        <Text />
        <Button
          onPress={() => this.props.navigation.navigate("DeletePage")}
          title="Delete HIV Results Only"
        />

        <Text />
        <Text />
        <Text> Any positive results should be confirmed by a </Text>
        <Text> healthcare provider.</Text>
        <Text />
        <Text />
        <Text> Negative results may not detect a recent infection. For</Text>
        <Text> for more information, click on the resources tab.</Text>
      </View>
    );
  }
}

export default DeletePage;
