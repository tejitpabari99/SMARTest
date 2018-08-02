import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, LeftTextBox, Picture } from "./Styles";

class Instructions5 extends Component {
  static navigationOptions = {
    title: "Sterilizing Finger"
  };
  render() {
    return (
      <Box>
        <TitleText>Sterilizing Finger</TitleText>
        <LeftTextBox />
        <Picture source={require("../Images/8B.png")} />
        <LeftTextBox>Choose a finger to prick. We recommend once on your non-dominant hand.</LeftTextBox>

        <LeftTextBox>Massage your finger to stimulate blood flow</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions6")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions5 };
