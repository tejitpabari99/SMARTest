import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture,LeftTextBox } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions2 extends Component {
  static navigationOptions = {
    title: "Preparing Gauze"
  };
  render() {
    return (
      <Box>
        <TitleText>Preparing Gauze</TitleText>
        <LeftTextBox />
        <Picture source={require("../Images/2.png")} />
        <LeftTextBox>Open Gauze packet and place it nearby for</LeftTextBox>
        <LeftTextBox>                             future use.</LeftTextBox>

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions3")} >
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

export { Instructions2 };
