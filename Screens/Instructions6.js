import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture,LeftTextBox } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions6 extends Component {
  static navigationOptions = {
    title: "Sterilizing Finger Contd.."
  };
  render() {
    return (
      <Box>
        <TitleText>Sterilizing Finger Contd..</TitleText>
        <LeftTextBox />
        <Picture source={require("../Images/alcohol.jpg")} />
        <LeftTextBox>                   Pick up alcohol swab</LeftTextBox>
        <LeftTextBox />
        <Picture source={require("../Images/7B.png")} />
        <LeftTextBox>Wipe the tip of your finger with the swab and </LeftTextBox>
        <LeftTextBox>                   let it dry completely.</LeftTextBox>
        <LeftTextBox> Massage your finger to stimulate blood flow.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions7")} >
          Next
        </GreenRoundButton>
        <Text></Text>

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
