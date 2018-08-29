import React, { Component } from "react";
import {Text} from "react-native";

import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions10 extends Component {
  static navigationOptions = {
    title: "Sample Transfer"
  };
  render() {
    return (
      <Box>
        <TitleText>Sample Transfer</TitleText>

        <CenterTextBox />
        <Picture source={require("../Images/11A.jpg")} />
        <CenterTextBox>Recap solution tube #1 and mix contents by inverting several times.</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/11B.jpg")} />
        <CenterTextBox>Pour the contents into the center of the test membrane.</CenterTextBox>
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

              <Button onPress={() => this.props.navigation.navigate("SavedResults")}>
                                    <Text>Results</Text>
                                    </Button>

        </FooterTab>

      </Box>
    );
  }
}

export { Instructions10 };
