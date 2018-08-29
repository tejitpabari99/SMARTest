import React, { Component } from "react";
import {Text} from "react-native";

import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions2 extends Component {
  static navigationOptions = {
    title: "Preparing Gauze"
  };
  render() {
    return (
      <Box>
        <TitleText>Preparing Gauze</TitleText>
        <CenterTextBox />
        <Picture source={require("../Images/2.jpg")} />
        <CenterTextBox> Open Gauze packet and place it nearby for future use.</CenterTextBox>

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("BlueLancet")} >
          Next
        </GreenRoundButton>
        <CenterTextBox />

        <FooterTab>
                                    <Button onPress={() => this.props.navigation.navigate("HomeScreen")}>
                                    <Text>New Test</Text>
                                    </Button>

                                  <Button onPress={() => this.props.navigation.navigate("Resources")}>
                                    <Text>Resources</Text>
                                    </Button>

                                    <Button onPress={() => this.props.navigation.navigate("SavedResults")}>
                                    <Text>Results</Text>
                                    </Button>

                                  </FooterTab>
      </Box>
    );
  }
}

export { Instructions2 };
