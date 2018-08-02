import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";

class TestAccuracy extends Component {
  static navigationOptions = {
    title: "Test Accuracy"
  };

  render() {
    return (
      <Box>
        <TitleText>Test Accuracy</TitleText>

        <CenterTextBox />
        <CenterTextBox>The INSTI Multiplex is extremely accurate when performed correctly. </CenterTextBox>
        <CenterTextBox>It has been shown to have a sensitivity of 99.6% and a specificity of 99.3% for the detection of HIV-1 and HIV-2 antibodies in finger-stick samples, and a 100% sensitivity and specificity for the detection of Secondary Syphilis.</CenterTextBox>
        <CenterTextBox />

      </Box>
    );
  }
}

export { TestAccuracy };
