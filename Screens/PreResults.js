import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenBlockButton, CenterTextBox, Picture, TextBox, BlueBlockButton } from "./Styles";
import { Alert } from 'react-native';
import call from 'react-native-phone-call';

class PreResults extends Component {
  static navigationOptions = {
    title: "Results"
  };

  checkUserSelection = () => {
    var newVar = this.props.navigation.state.params.newVar
    if (global.userSelection === 1) {
      return (
        <GreenBlockButton onPress={() => this.props.navigation.navigate("GuestResults", {newVar})} >
          Results
        </GreenBlockButton>
      );
    }
    else {
      return (
        <GreenBlockButton onPress={() => this.props.navigation.navigate("Results", {newVar})} >
          Results
        </GreenBlockButton>
      );
    }
  }

  callHotline = () => {
    Alert.alert(
      'Dial Hotline',
      'Clicking on this will initiate a call with a 24 hour hotline. Do you want to call the hotline for immediate assistance now?',
      [
        {text: 'OK', onPress: () => this.call()},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <Box>
        <TitleText>Results</TitleText>

        <CenterTextBox />
        <CenterTextBox> Your HIV and syphilis results will now be shown on the next page. </CenterTextBox>
        <CenterTextBox />
        {this.checkUserSelection()}
        <CenterTextBox />
        <CenterTextBox />
        <BlueBlockButton onPress={() => this.callHotline()} >
          Call Hotline!
        </BlueBlockButton>
        <TextBox> If you require immediate counseling or assistance, please dial the hotline for help</TextBox>

      </Box>
    );
  }
}

export { PreResults };
