import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, LeftTextBox, Picture } from "./Styles";

class Instructions7 extends Component {
  static navigationOptions = {
    title: "Extract Blood"
  };
  render() {
    return (
      <Box>
        <TitleText>Extract Blood</TitleText>

        <LeftTextBox />
        <Picture source={require("../Images/8A.png")} />
        <LeftTextBox>Place tip of lancet on the clean finger.</LeftTextBox>
        <LeftTextBox>Firmly Push Down on the other end.</LeftTextBox>
        <LeftTextBox />
        <Picture source={require("../Images/8B.png")} />
        <LeftTextBox>You will feel a momentary pinprick.</LeftTextBox>
        <LeftTextBox>Afterwards, discard lancet in trash.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions8")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions7 };
