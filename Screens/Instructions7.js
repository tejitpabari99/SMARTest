import React, { Component } from "react";
import {Text} from "react-native";

import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions7 extends Component {
  static navigationOptions = {
    title: "Extract Blood"
  };
  render() {
    return (
      <Box>
        <TitleText>Extract Blood</TitleText>
        <CenterTextBox />
        <Picture source={require("../Images/8A.jpg")} />
        <CenterTextBox> Place tip of lancet on the clean finger. Firmly push down on the other end.</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/8B.jpg")} />
        <CenterTextBox> You will feel a momentary pinprick.</CenterTextBox>
        <CenterTextBox> Afterwards, discard lancet in trash.</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions8")} >
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

export { Instructions7 };
