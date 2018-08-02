import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, LeftTextBox, Picture } from "./Styles";

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

        <LeftTextBox />
        <Picture source={require("../Images/13A.jpg")} />
        <LeftTextBox>Pick up solution tube #3 and mix it well.</LeftTextBox>
        <LeftTextBox />
        <Picture source={require("../Images/13B.png")} />
        <LeftTextBox>Remove the cap and pour on to the center of the test membrane.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.checkUserSelection()} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions12 };
