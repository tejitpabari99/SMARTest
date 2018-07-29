import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";

class Instructions9 extends Component {
  static navigationOptions = {
    title: "Bandaging Finger"
  };
  render() {
    return (
      <Box>
        <TitleText>Bandaging Finger</TitleText>

        <CenterTextBox />
        <Picture source={require("../Images/10.png")} />
        <CenterTextBox>Wipe your finger with the gauze and put on a bandage.</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions10")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions9 };
