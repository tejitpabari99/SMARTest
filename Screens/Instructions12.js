import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";

class Instructions12 extends Component {
  static navigationOptions = {
    title: "Running the Test - 2"
  };

  checkUserSelection = () => {
    if (global.userSelection === 0 || global.userSelection === 2) {
      this.props.navigation.navigate("TakePicture");
    } else if (global.userSelection === 1) {
      this.props.navigation.navigate("GuestTakePicture");
    }
  };

  render() {
    return (
      <Box>
        <TitleText>Running the Test - 2</TitleText>

        <CenterTextBox />
        <Picture source={require("../Images/13A.jpg")} />
        <CenterTextBox>Pick up solution tube #3 and mix it well.</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/13B.png")} />
        <CenterTextBox>Remove the cap and pour on to the center of the test membrane.</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.checkUserSelection()} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions12 };
