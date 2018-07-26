import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";

class Instructions4 extends Component {
  static navigationOptions = {
    title: "Prepare Sample Collector"
  };
  render() {
    return (
      <Box>
        <TitleText>Prepare Sample Collector</TitleText>

        <CenterTextBox />
        <Picture source={require("../Images/redVile.jpg")} />
        <CenterTextBox>Pick up the Solution tube #1 with the red cap and twist open the cap.</CenterTextBox>
        <CenterTextBox>Place it nearby for future uses Be Careful not to knock it over!</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions5")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { Instructions4 };
