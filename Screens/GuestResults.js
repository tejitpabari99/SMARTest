import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { TitleText, Box, GreenBlockButton, BlueBlockButton, GreenRoundButton, TextBox, TextBoxTitle, Card, CardSection, CardText } from "./Styles";


const temp_hiv = Math.floor(Math.random() * 2);
const temp_syphilis = Math.floor(Math.random() * 2);
const tempResult = {
  hiv: temp_hiv,
  syphilis: temp_syphilis
}

class GuestResults extends Component {
  static navigationOptions = {
    title: "Guest Results"
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
      <Box>
        <TitleText>Your Results are</TitleText>
        <Card>
          <CardSection>
              <CardText> Date - {this.state.date}</CardText>
          </CardSection>
          <CardSection>
            <CardText> HIV - {this.state.test_hiv}</CardText>
            <CardText> SYPHILIS - {this.state.test_syphilis}</CardText>
          </CardSection>
        </Card>
        <TextBox />
        <BlueBlockButton onPress={() => this.props.navigation.navigate("Resources")} >
          Resources
        </BlueBlockButton>
        <TextBox />
        <TextBox />
        <TextBox />
        <TextBoxTitle>Note</TextBoxTitle>
        <TextBox>Any positive results should be confirmed by a healthcare provider.</TextBox>
        <TextBox>Negative results may not detect a recent infection. For more information click on the resources tab.</TextBox>
        <TextBox />
        <GreenRoundButton onPress={() => this.props.navigation.navigate("TestSelection")} >
          New Test
        </GreenRoundButton>
      </Box>
    );
  }
}

export { GuestResults };
