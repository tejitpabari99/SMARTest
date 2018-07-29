import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";

class Instructions6 extends Component {
  static navigationOptions = {
    title: "Sterilizing Finger Contd.."
  };
  render() {
    return (
      <Box>
        <TitleText>Sterilizing Finger Contd..</TitleText>
        <CenterTextBox />
        <Picture source={require("../Images/alcohol.jpg")} />
        <CenterTextBox>Pick up alcohol swab</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/7B.png")} />
        <CenterTextBox>Wipe the tip of your finger with the swab and let it dry completely.</CenterTextBox>
        <CenterTextBox>Massage your finger to stimulate blood flow</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions7")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions6 };
