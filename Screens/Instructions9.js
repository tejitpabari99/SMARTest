import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, LeftTextBox, Picture } from "./Styles";

class Instructions9 extends Component {
  static navigationOptions = {
    title: "Bandaging Finger"
  };
  render() {
    return (
      <Box>
        <TitleText>Bandaging Finger</TitleText>

        <LeftTextBox />
        <Picture source={require("../Images/10.png")} />
        <LeftTextBox>Wipe your finger with the gauze and put on a bandage.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions10")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions9 };
