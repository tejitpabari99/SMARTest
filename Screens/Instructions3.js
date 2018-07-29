import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";

class Instructions3 extends Component {
  static navigationOptions = {
    title: "Preparing Test"
  };
  render() {
    return (
      <Box>

        <TitleText>Preparing Test</TitleText>
        <CenterTextBox />
        <Picture source={require("../Images/4A.png")} />
        <CenterTextBox>Pick up the test pouch and tear it open. </CenterTextBox>
        <CenterTextBox>Place the test on a flat surface.</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/4B.jpg")} />
        <CenterTextBox>Make sure to oreint the test so the lip faces towards you.</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions4")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions3 };
