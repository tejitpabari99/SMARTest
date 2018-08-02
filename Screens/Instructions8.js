import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, LeftTextBox, Picture } from "./Styles";

class Instructions8 extends Component {
  static navigationOptions = {
    title: "Collecting Blood"
  };
  render() {
    return (
      <Box>
        <TitleText>Collecting Blood</TitleText>

        <LeftTextBox />

        <Picture source={require("../Images/9.png")} />
        <LeftTextBox>Squeeze your finger to extract blood.</LeftTextBox>
        <LeftTextBox>Grab solution tube #1 and drop the blood directly into the tube. Make sure you get a few drops of blood into the tube.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions9")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions8 };
