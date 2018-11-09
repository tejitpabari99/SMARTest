import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture, TextBox } from "./Styles";
import { Alert } from 'react-native';
import call from 'react-native-phone-call';

class DualInstructions extends Component {
  static navigationOptions = {
    title: "Instructions for Dual Mode"
  };

  render() {
    return (
      <Box>
        <TitleText>Instructions for Dual Mode</TitleText>

        <CenterTextBox />
        <CenterTextBox> First you will take a picture of your test kit. </CenterTextBox>
        <CenterTextBox />
        <CenterTextBox> Then, take a picture of your Guest's test kit. </CenterTextBox>
        <CenterTextBox />
        <CenterTextBox> We will show you the result in the same order after both pictures are captured . </CenterTextBox>
        <CenterTextBox />
        <GreenRoundButton onPress={() => this.props.navigation.navigate("TakePicture")} >
          Next
        </GreenRoundButton>
      </Box>
    );
  }
}

export { DualInstructions };
