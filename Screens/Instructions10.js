import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, LeftTextBox, Picture } from "./Styles";

class Instructions10 extends Component {
  static navigationOptions = {
    title: "Sample Transfer"
  };
  render() {
    return (
      <Box>
        <TitleText>Sample Transfer</TitleText>

        <LeftTextBox />
        <Picture source={require("../Images/11A.png")} />
        <LeftTextBox>Recap solution tube #1 and mix contents by inverting several times.</LeftTextBox>
        <LeftTextBox />
        <Picture source={require("../Images/11B.png")} />
        <LeftTextBox>Pour the contents to the center of the test membrane.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions11")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions10 };
