import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture,LeftTextBox } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions11 extends Component {
  static navigationOptions = {
    title: "Running the Test - 1"
  };
  render() {
    return (
      <Box>
        <TitleText>Running the Test - 1</TitleText>

        <LeftTextBox />
        <Picture source={require("../Images/12A.jpg")} />
        <LeftTextBox>Pick up solution tube #2 and mix the contents </LeftTextBox>
        <LeftTextBox>                 by inverting several times.</LeftTextBox>
        <LeftTextBox />
        <Picture source={require("../Images/12B.png")} />
        <LeftTextBox>Remove the cap and pour contents into the </LeftTextBox>
        <LeftTextBox>                     center of the test.</LeftTextBox>
        <LeftTextBox />
        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions12")} >
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

export { Instructions11 };
