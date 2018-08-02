import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";

class WindowPeriod extends Component {
  static navigationOptions = {
    title: "Window Period"
  };
  render() {
    return (
      <Box>
        <TitleText>Window Period</TitleText>

        <CenterTextBox />
        <CenterTextBox>You may test positive with the INSTI Multiplex in as little as 21-22 days after infection; however, it can take as long as 3 months after infection toi produce a positive result of 99.6% and a specificity of 99.3% for the detection of HIV-1 and HIV-2
        antibodies in. </CenterTextBox>
        <CenterTextBox>The average incubation period for syphillis is 3 to 6 weeks, and 25 days to 2 months for HIV. If you get tested before this time has elapsed, it is recommended that you test again to confirm your results once the incubation period has passed.</CenterTextBox>
        <CenterTextBox />

      </Box>
    );
  }
}

export { WindowPeriod };
