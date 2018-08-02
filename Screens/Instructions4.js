import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, LeftTextBox, Picture } from "./Styles";

class Instructions4 extends Component {
  static navigationOptions = {
    title: "Prepare Sample Collector"
  };
  render() {
    return (
      <Box>
        <TitleText>Prepare Sample Collector</TitleText>

        <LeftTextBox />
        <Picture source={require("../Images/redVile.jpg")} />
        <LeftTextBox>Pick up the Solution tube #1 with the red cap and twist open the cap.</LeftTextBox>
        <LeftTextBox>Place it nearby for future use.</LeftTextBox>
        <LeftTextBox>Be Careful not to knock it over!</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions5")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions4 };
