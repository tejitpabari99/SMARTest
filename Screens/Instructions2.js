import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, LeftTextBox, Picture } from "./Styles";

class Instructions2 extends Component {
  static navigationOptions = {
    title: "Preparing Gauze"
  };
  render() {
    return (
      <Box>
        <TitleText>Preparing Gauze</TitleText>
        <LeftTextBox />
        <Picture source={require("../Images/2.png")} />
        <LeftTextBox>Open Gauze packet and place it nearby for future use.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions3")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions2 };
