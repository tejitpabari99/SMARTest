import React, { Component } from "react";
import { TitleText, Box, GreenBlockButton, BlueBlockButton, TextBox } from "./Styles";

class Resources extends Component {
  static navigationOptions = {
    title: "Resources"
  };
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
      </Box>
    );
  }
}

export { Resources };
