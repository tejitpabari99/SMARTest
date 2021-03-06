import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { TitleText, Box, GreenBlockButton, BlueBlockButton, GreenRoundButton, TextBox, TextBoxTitle, Card, CenterTextBox, CardSection, ErrorText, CardText } from "./Styles";


const temp_hiv = Math.floor(Math.random() * 2);
const temp_syphilis = Math.floor(Math.random() * 2);
const tempResult = {
  hiv: temp_hiv,
  syphilis: temp_syphilis
}

class GuestResults extends Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    if(global.userSelection !== 2){
      return {
        title: "Guest Results",
        headerLeft: null,
      }
    }
    else {
      return {
        title: "Guest Results",
      }
    }
  };

  state = {
    test_hiv: null,
    test_syphilis: null,
    date: null,
  }

  calculateResult = (guestResult) => {

    var hiv, syphilis = '';

    var today = new Date();
    var date = today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear() + " / " + today.getHours() + ":" + today.getMinutes();
    var time = today.getTime();
    var error = '';

    if(guestResult === 0) {
      hiv = 'Negative';
      syphilis = 'Negative'
    }
    else if(guestResult === 1){
      hiv = 'Negative';
      syphilis = 'Positive'
    }
    else if(guestResult === 2){
      hiv = 'Positive';
      syphilis = 'Negative'
    }
    else if(guestResult === 3){
      hiv = 'Positive';
      syphilis = 'Positive'
    }
    else {
      hiv = 'Invalid';
      syphilis = 'Invalid'
      error = 'Invalid Results. Please do the test again.'
    }

    this.setState({
      test_hiv: hiv,
      test_syphilis: syphilis,
      date: date,
      errorMessage: error
    });
  }

  componentWillMount() {
    var guestResult = parseInt(this.props.navigation.state.params.newVar.guestResult)
    this.calculateResult(guestResult);
  }

  render() {
    return (
      <Box>
        <TitleText>Your Results are</TitleText>
        <Card>
          <CardSection>
              <CardText> Date: {this.state.date}</CardText>
              <CardText> ID: {this.state.id}</CardText>
          </CardSection>
          <CardSection>
            <CardText> HIV: {this.state.test_hiv}</CardText>
            <CardText> SYPHILIS: {this.state.test_syphilis}</CardText>
          </CardSection>
        </Card>
        <TextBox />
        <ErrorText> {this.state.errorMessage} </ErrorText>
        <TextBox />
        <BlueBlockButton onPress={() => this.props.navigation.navigate("Resources")} >
          Resources
        </BlueBlockButton>
        <TextBox />
        <TextBox />
        <TextBox />
        <TextBoxTitle>Note</TextBoxTitle>
        <CenterTextBox>Any positive results should be confirmed by a healthcare provider.</CenterTextBox>
        <CenterTextBox>Negative results may not detect a recent infection. For more information click on the resources tab.</CenterTextBox>
        <TextBox />
        <GreenRoundButton onPress={() => this.props.navigation.navigate("TestSelection")} >
          New Test
        </GreenRoundButton>
      </Box>
    );
  }
}

export { GuestResults };
