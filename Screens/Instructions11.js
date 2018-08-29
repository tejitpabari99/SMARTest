import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions11 extends Component {
  static navigationOptions = {
    title: "Running the Test - 1"
  };
  render() {
    return (
      <Box>
        <TitleText>Running the Test - 1</TitleText>

        <CenterTextBox />
        <Picture source={require("../Images/12A.jpg")} />
        <CenterTextBox>Pick up solution tube #2 and mix the contents by inverting several times.</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/12B.jpg")} />
        <CenterTextBox>Remove the cap and pour contents into the center of the test.</CenterTextBox>
        <CenterTextBox />
        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions12")} >
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

export { Instructions11 };
