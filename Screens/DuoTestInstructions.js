import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from "react-native";

class DuoTestInstructions extends Component {
  static navigationOptions = {
    title: "Material List"
  };
  render() {
    return (
      <ScrollView>
        <Text> INSTI MULTIPLEX </Text>
        <Text> Kit Materials </Text>

        <Text />
        <Text />
        <Image
          source={require("../images/membraneUnit.jpg")}
          style={{ width: 193, height: 110 }}
        />
        <Text>Membrane Unit</Text>
        <Text />
        <Text />
        <Image
          source={require("../images/5.jpg")}
          style={{ width: 193, height: 110 }}
        />
        <Text>Solution 1 Vial</Text>
        <Text />
        <Text />
        <Image
          source={require("../images/12A.jpg")}
          style={{ width: 193, height: 110 }}
        />
        <Text>Solution 2 Vial</Text>
        <Text />
        <Text />
        <Image
          source={require("../images/13A.jpg")}
          style={{ width: 193, height: 110 }}
        />
        <Text>Solution 3 Vial</Text>
        <Text />
        <Text />
        <Image
          source={require("../images/lancet.jpg")}
          style={{ width: 193, height: 110 }}
        />
        <Text>Single use Lancet</Text>
        <Text />
        <Text />
        <Image
          source={require("../images/alcohol.jpg")}
          style={{ width: 193, height: 110 }}
        />
        <Text>Alcohol Swab</Text>
        <Text />
        <Text />
        <Image
          source={require("../images/7A.jpg")}
          style={{ width: 193, height: 110 }}
        />
        <Text>Gauze Pad </Text>
        <Text />
        <Text />
        <Image
          source={require("../images/bandage.jpg")}
          style={{ width: 193, height: 110 }}
        />
        <Text>Bandage </Text>

        <Button
          onPress={() => this.props.navigation.navigate("Instructions2")}
          title="Next"
        />
      </ScrollView>
    );
  }
}

export default DuoTestInstructions;
