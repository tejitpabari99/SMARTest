import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";

class Instructions10 extends Component {
  static navigationOptions = {
    title: "Simple Transfer"
  };
  render() {
    return (
      <Box>
        <TitleText>Simple Transfer</TitleText>

        <CenterTextBox />
        <Picture source={require("../Images/11A.png")} />
        <CenterTextBox>Recap solution tube #1 and mix contents by inverting several times.</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/11B.png")} />
        <CenterTextBox>pour the contents to the center of the test membrane.</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions11")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions10 };
