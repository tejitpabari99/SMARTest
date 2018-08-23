import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture, LeftTextBox } from "./Styles";

class TestAccuracy extends Component {
  static navigationOptions = {
    title: "Test Accuracy"
  };

  render() {
    return (
      <Box>
        <TitleText>Test Accuracy</TitleText>


        <LeftTextBox>The INSTI Multiplex is extremely accurate when  </LeftTextBox>
        <LeftTextBox>                        performed correctly. </LeftTextBox>
        <Text></Text>
        <LeftTextBox>   It has been shown to have a sensitivity of  </LeftTextBox>
        <LeftTextBox>   99.6% and a specificity of 99.3% for the  </LeftTextBox>
        <LeftTextBox> detection of HIV-1 and HIV-2 antibodies in finger-stick samples, and a 100% sensitivity and specificity for the detection of Secondary  </LeftTextBox>
        <LeftTextBox>                                 Syphilis</LeftTextBox>
      </Box>
    );
  }
}

export { TestAccuracy };
