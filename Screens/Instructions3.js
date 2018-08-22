import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture,LeftTextBox } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions3 extends Component {
  static navigationOptions = {
    title: "Preparing Test"
  };
  render() {
    return (
      <Box>

        <TitleText>Preparing Test</TitleText>
        <LeftTextBox />
        <Picture source={require("../Images/4A.png")} />
        <LeftTextBox>     Pick up the test pouch and tear it open. </LeftTextBox>
        <LeftTextBox>           Place the test on a flat surface.</LeftTextBox>
        <LeftTextBox />
        <Picture source={require("../Images/4B.jpg")} />
        <LeftTextBox>Make sure to orient the test so the lip faces </LeftTextBox>
        <LeftTextBox>                           towards you.</LeftTextBox>

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions4")} >
          Next
        </GreenRoundButton>
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

export { Instructions3 };
