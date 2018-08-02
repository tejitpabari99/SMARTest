import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, LeftTextBox, Picture } from "./Styles";

class Instructions11 extends Component {
  static navigationOptions = {
    title: "Running the Test - 1"
  };
  render() {
    return (
      <Box>
        <TitleText>Running the Test - 1</TitleText>

        <LeftTextBox />
        <Picture source={require("../Images/12A.jpg")} />
        <LeftTextBox>Pick up solution tube #2 and mix the contents by inverting several times.</LeftTextBox>
        <LeftTextBox />
        <Picture source={require("../Images/12B.png")} />
        <LeftTextBox>Remove the cap and pour contents into the center of the test.</LeftTextBox>
        <LeftTextBox />
        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions12")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions11 };
