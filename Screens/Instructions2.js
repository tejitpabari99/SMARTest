import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";

class Instructions2 extends Component {
  static navigationOptions = {
    title: "Preparing Gauze"
  };
  render() {
    return (
      <Box>
        <TitleText>Preparing Gauze</TitleText>
        <CenterTextBox />
        <Picture source={require("../Images/2.png")} />
        <CenterTextBox>Open Gauze packet and place it nearby for future uses</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions3")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions2 };
