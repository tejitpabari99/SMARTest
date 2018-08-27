import React, { Component } from "react";
import {Text} from "react-native";

import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions4 extends Component {
  static navigationOptions = {
    title: "Prepare Sample Collector"
  };
  render() {
    return (
      <Box>
        <TitleText>Prepare Sample Collector</TitleText>

        <CenterTextBox />
        <Picture source={require("../Images/redVile.jpg")} />
        <CenterTextBox>Pick up the Solution tube #1 with the red cap  and twist open the cap.</CenterTextBox>

        <CenterTextBox> Place it nearby for future use. Be careful not to knock it over!</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions5")} >
          Next
        </GreenRoundButton>

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

export { Instructions4 };
