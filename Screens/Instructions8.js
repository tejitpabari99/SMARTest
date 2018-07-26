import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";

class Instructions8 extends Component {
  static navigationOptions = {
    title: "Collecting Blood"
  };
  render() {
    return (
      <Box>
        <TitleText>Collecting Blood</TitleText>

        <CenterTextBox />

        <Picture source={require("../Images/9.png")} />
        <CenterTextBox>Squeeze your finger to extract blood.</CenterTextBox>
        <CenterTextBox>Grab solution tube #1 and drop the blood directly into the tube. Make sure you get a few drops of blood into the tube.</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions9")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions8 };
