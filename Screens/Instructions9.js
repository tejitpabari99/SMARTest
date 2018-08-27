import React, { Component } from "react";
import {Text} from "react-native";

import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions9 extends Component {
  static navigationOptions = {
    title: "Bandaging Finger"
  };
  render() {
    return (
      <Box>
        <TitleText>Bandaging Finger</TitleText>

        <CenterTextBox />
        <Picture source={require("../Images/10.png")} />
        <CenterTextBox>Wipe your finger with the gauze and put on a  bandage.</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("NewLancetAddition")} >
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

export { Instructions9 };
