import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";

class Instructions5 extends Component {
  static navigationOptions = {
    title: "Sterilizing Finger"
  };
  render() {
    return (
      <Box>
        <TitleText>Sterilizing Finger</TitleText>
        <CenterTextBox />
        <Picture source={require("../Images/8B.png")} />
        <CenterTextBox>Choose a finger to prick. We recommend once on your non-dominant hand.</CenterTextBox>

        <CenterTextBox>Massage your finger to stimulate blood flow</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions6")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions5 };
