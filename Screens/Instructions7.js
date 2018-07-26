import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";

class Instructions7 extends Component {
  static navigationOptions = {
    title: "Extract Blood"
  };
  render() {
    return (
      <Box>
        <TitleText>Extract Blood</TitleText>

        <CenterTextBox />
        <Picture source={require("../Images/8A.png")} />
        <CenterTextBox>Place tip of lancet on the clean finger.</CenterTextBox>
        <CenterTextBox>Firmly Push Down on the other end.</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/8B.png")} />
        <CenterTextBox>You will feel a momentary pinprick.</CenterTextBox>
        <CenterTextBox>After, discard lancet in trash completely.</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions8")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions7 };
