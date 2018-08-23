import React, { Component } from "react";
import { TitleText, Box, GreenBlockButton, BlueBlockButton, TextBox } from "./Styles";
import { Alert } from 'react-native';
import call from 'react-native-phone-call';

class Resources extends Component {
  static navigationOptions = {
    title: "Resources"
  };

  call = () => {
    const args = {
      number: '18002324636',
      prompt: false
    }

    call(args).catch(console.error)
  }

  callHotline = () => {
    Alert.alert(
      'Dial Hotline',
      'Clicking on this will initiatie a call with a 24 hour hotline. Do you want to call the hotline for immediate assistance now?',
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
        <TitleText>Resources</TitleText>
        <TextBox />
        <GreenBlockButton onPress={() => this.props.navigation.navigate("TestAccuracy")} >
          Test Accuracy
        </GreenBlockButton>
        <BlueBlockButton onPress={() => this.props.navigation.navigate("WindowPeriod")} >
          Window Period
        </BlueBlockButton>
        <GreenBlockButton onPress={() => this.props.navigation.navigate("DiseasesInfo")} >
          Diseases Info
        </GreenBlockButton>
        <BlueBlockButton onPress={() => this.props.navigation.navigate("NearbyClinics")} >
          Nearby Clinics
        </BlueBlockButton>
        <TextBox />
        <GreenBlockButton onPress={() => this.callHotline()} >
          Call Hotline!
        </GreenBlockButton>
      </Box>
    );
  }
}

export { Resources };
