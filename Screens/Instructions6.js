import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions6 extends Component {
  static navigationOptions = {
    title: "Sterilizing Finger Contd.."
  };
  render() {
    return (
      <Box>
        <TitleText>Sterilizing Finger Contd..</TitleText>
        <CenterTextBox />
        <Picture source={require("../Images/alcohol.jpg")} />
        <CenterTextBox> Pick up alcohol swab</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/7B.png")} />
        <CenterTextBox>Wipe the tip of your finger with the swab and let it dry completely.</CenterTextBox>
        <CenterTextBox> Massage your finger to stimulate blood flow.</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions7")} >
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

export { Instructions6 };
