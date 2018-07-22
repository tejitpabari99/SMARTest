import React, { Component } from "react";
import {View} from 'react-native';
import { TitleText, Box, GreenSmallButton, BlueSmallButton, TextBox, TextBoxTitle } from "./Styles";

class TestSetup extends Component {
  static navigationOptions = {
    title: "Test Options"
  };
  me = () => {
    global.userSelection = 0;
    this.props.navigation.navigate("VideoInfo");
  };
  partner = () => {
    global.userSelection = 1;
    this.props.navigation.navigate("VideoInfo");
  };
  duo = () => {
    global.userSelection = 2;
    this.props.navigation.navigate("VideoInfo");
  };

  render() {
    return (
      <Box>
        <TitleText>Select Testing mode below</TitleText>
        <View style={{ alignItems: 'center'}}>
          <GreenSmallButton onPress={() => this.me()} >
            Just Me
          </GreenSmallButton>
          <BlueSmallButton onPress={() => this.partner()} >
            Just My Partner
          </BlueSmallButton>
          <GreenSmallButton onPress={() => this.duo()} >
            Duo Test
          </GreenSmallButton>
        </View>
        <TextBox />
        <TextBox />
        <TextBoxTitle>Note</TextBoxTitle>
        <TextBox>Just My partner will lead to the guest account mode where results cannot be saved. </TextBox>
        <TextBox>Duo Test Mode will enable simultaneous testing (e.g you and your partner), however the Partners Results cannot be saved. </TextBox>
        <TextBox />

      </Box>
    );
  }
}

export { TestSetup };
