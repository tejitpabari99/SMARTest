import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

const temp_hiv = Math.floor(Math.random() * 2);
const temp_syphilis = Math.floor(Math.random() * 2);
const tempResult = {
  hiv: temp_hiv,
  syphilis: temp_syphilis
}

class GuestResults extends Component {
  static navigationOptions = {
    title: "RESULTS"
  };

  state = {
    test_hiv: null,
    test_syphilis: null,
    date: null,
  }

  calculateResult = (result) => {
    var hiv, syphilis = '';

    var today = new Date();
    var date = today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();

    if(result.hiv === 0) {
      hiv = 'Negative';
    }
    else {
      hiv = 'Positive';
    }

    if(syphilis === 0) {
      syphilis = 'Negative';
    }
    else {
      syphilis = 'Positive';
    }

    this.setState({
      test_hiv: hiv,
      test_syphilis: syphilis,
      date: date
    });
  }

  componentWillMount() {
    this.calculateResult(tempResult);
  }

  render() {
    return (
      <View>
        <Text> Result </Text>
        <Text> YOUR RESULT IS DISPLAYED HERE: </Text>
        <Text> HIV - {this.state.test_hiv}</Text>
        <Text> SYPHILIS - {this.state.test_syphilis}</Text>
        <Text> Date - {this.state.date}</Text>

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

export { GuestResults };
