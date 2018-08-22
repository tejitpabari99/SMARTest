import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture,LeftTextBox } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions5 extends Component {
  static navigationOptions = {
    title: "Sterilizing Finger"
  };
  render() {
    return (
      <Box>
        <TitleText>Sterilizing Finger</TitleText>
        <LeftTextBox />
        <Picture source={require("../Images/8B.png")} />
        <LeftTextBox>Choose a finger to prick. We recommend once.</LeftTextBox>
        <LeftTextBox>                  on your non-dominant hand.</LeftTextBox>
        <Text></Text>
        <LeftTextBox>   Massage your finger to stimulate blood flow.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions6")} >
          Next
        </GreenRoundButton>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
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

export { Instructions5 };
