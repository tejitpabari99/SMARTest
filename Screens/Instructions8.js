import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions8 extends Component {
  static navigationOptions = {
    title: "Collecting Blood"
  };
  render() {
    return (
      <Box>
        <TitleText>Collecting Blood</TitleText>

        <CenterTextBox />

        <Picture source={require("../Images/9.jpg")} />
        <CenterTextBox> Squeeze your finger to extract blood.</CenterTextBox>

        <CenterTextBox> Grab solution tube #1 and drop the blood directly into the tube. Make sure you get a few drops of blood into the tube.</CenterTextBox>
        <CenterTextBox />
        <CenterTextBox> Careful not to let the blood touch the rim  of the tube.</CenterTextBox>
        <CenterTextBox />
        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions9")} >
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

export { Instructions8 };
