import React, { Component } from "react";
import {Text} from "react-native";

import { TitleText, Box, TextBoxTitle, GreenRoundButton, TextBox, CenterTextBox, Picture } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions5 extends Component {
  static navigationOptions = {
    title: "Sterilizing Finger"
  };
  render() {
    return (
      <Box>
        <TitleText>Sterilizing Finger</TitleText>
        <CenterTextBox />
        <Picture source={require("../Images/8B.jpg")} />
        <CenterTextBox>Choose a finger to prick. We recommend once on your non-dominant hand.</CenterTextBox>
        <TextBox />
        <CenterTextBox> Massage your finger to stimulate blood flow.</CenterTextBox>
        <CenterTextBox />
``
        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions6")} >
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

export { Instructions5 };
