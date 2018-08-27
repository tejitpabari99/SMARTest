import React, { Component } from "react";
import {Text} from "react-native";

import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";
import { FooterTab,Button } from 'native-base';

class BlueLancet extends Component {
  static navigationOptions = {
    title: "Pulling Blue Lancet"
  };
  render() {
    return (
      <Box>
        <TitleText>Pulling Blue Lancet</TitleText>

        <CenterTextBox />
        <CenterTextBox> Pull the clear cap from the top of the blue lancet.</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/blueLancet.jpeg")} />

        <CenterTextBox>  Place it nearby for future use.</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions11")} >
          Next
        </GreenRoundButton>





        <FooterTab>
              <Button onPress={() => this.props.navigation.navigate("HomeScreen")}>
                                    <Text>New Test</Text>
                                    </Button>

              <Button onPress={() => this.props.navigation.navigate("Resources")}>
                                    <Text>Resources</Text>
                                    </Button>

              <Button onPress={() => this.props.navigation.navigate("Results")}>
                                    <Text>Results</Text>
                                    </Button>

        </FooterTab>

      </Box>
    );
  }
}

export { BlueLancet };
