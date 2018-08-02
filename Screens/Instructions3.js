import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, LeftTextBox, Picture } from "./Styles";

class Instructions3 extends Component {
  static navigationOptions = {
    title: "Preparing Test"
  };
  render() {
    return (
      <Box>

        <TitleText>Preparing Test</TitleText>
        <LeftTextBox />
        <Picture source={require("../Images/4A.png")} />
        <LeftTextBox>Pick up the test pouch and tear it open. </LeftTextBox>
        <LeftTextBox>Place the test on a flat surface.</LeftTextBox>
        <LeftTextBox />
        <Picture source={require("../Images/4B.jpg")} />
        <LeftTextBox>Make sure to orient the test so the lip faces towards you.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions4")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions3 };
