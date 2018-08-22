import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture,LeftTextBox } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions10 extends Component {
  static navigationOptions = {
    title: "Sample Transfer"
  };
  render() {
    return (
      <Box>
        <TitleText>Sample Transfer</TitleText>

        <LeftTextBox />
        <Picture source={require("../Images/11A.png")} />
        <LeftTextBox>Recap solution tube #1 and mix contents by </LeftTextBox>
        <LeftTextBox>                 inverting several times.</LeftTextBox>
        <LeftTextBox />
        <Picture source={require("../Images/11B.png")} />
        <LeftTextBox>Pour the contents into the center of the test </LeftTextBox>
        <LeftTextBox>                              membrane.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("BlueLancet")} >
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

export { Instructions10 };
