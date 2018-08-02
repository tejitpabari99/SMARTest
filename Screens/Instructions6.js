import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, LeftTextBox, Picture } from "./Styles";

class Instructions6 extends Component {
  static navigationOptions = {
    title: "Sterilizing Finger Contd.."
  };
  render() {
    return (
      <Box>
        <TitleText>Sterilizing Finger Contd..</TitleText>
        <LeftTextBox />
        <Picture source={require("../Images/alcohol.jpg")} />
        <LeftTextBox>Pick up alcohol swab</LeftTextBox>
        <LeftTextBox />
        <Picture source={require("../Images/7B.png")} />
        <LeftTextBox>Wipe the tip of your finger with the swab and let it dry completely.</LeftTextBox>
        <LeftTextBox>Massage your finger to stimulate blood flow</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions7")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions6 };
