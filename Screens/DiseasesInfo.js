import React, { Component } from "react";
import { Linking } from "react-native";
import { TitleText, Box, GreenBlockButton, BlueBlockButton, TextBox } from "./Styles";


class DiseasesInfo extends Component {
  static navigationOptions = {
    title: "Diseases Info"
  };
  render() {
    return (
      <Box>
        <TitleText>Diseases Info</TitleText>
        <TextBox>Click on the links to learn more about HIV and syphillis.</TextBox>

        <GreenBlockButton onPress={() => Linking.openURL('https://www.cdc.gov/hiv/basics/index.html')} >
          HIV Information
        </GreenBlockButton>
        <BlueBlockButton onPress={() => Linking.openURL('https://www.cdc.gov/tuskegee/syphilis.htm')} >
          Syphilis Information
        </BlueBlockButton>

      </Box>
    );
  }
}

export { DiseasesInfo };
