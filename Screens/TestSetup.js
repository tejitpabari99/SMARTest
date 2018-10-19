import React, { Component } from "react";
import {View, Text} from 'react-native';
import { TitleText, Box, GreenSmallButton, BlueSmallButton, TextBox, TextBoxTitle, CenterTextBox } from "./Styles";

var newVar = {}
newVar['userResult'] = 'blah'

class TestSetup extends Component {

  static navigationOptions = {
    title: "Test Setup"
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
    // this.props.navigation.navigate("Results", {newVar});
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


        <TextBoxTitle> Note</TextBoxTitle>
        <CenterTextBox>{"'Just My Partner' will lead to the guest account mode where results cannot be saved."}</CenterTextBox>
        <TextBox />
        <CenterTextBox>{"'Duo Test' mode will enable simultaneous testing (e.g., you and your partner),however the partner's result cannot be saved."}</CenterTextBox>

      </Box>
    );
  }
}

export { TestSetup };
