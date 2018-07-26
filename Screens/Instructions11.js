import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";

class Instructions11 extends Component {
  static navigationOptions = {
    title: "Running the Test - 1"
  };
  render() {
    return (
      <Box>
        <TitleText>Running the Test - 1</TitleText>

        <CenterTextBox />
        <Picture source={require("../Images/12A.jpg")} />
        <CenterTextBox>Pick up solution tube #2 and mix the contents by inverting several times.</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/12B.png")} />
        <CenterTextBox>Remove the cap and pour contents into the center of the test .</CenterTextBox>
        <CenterTextBox />
        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions12")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions11 };
