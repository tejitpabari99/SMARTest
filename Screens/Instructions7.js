import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture,LeftTextBox } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions7 extends Component {
  static navigationOptions = {
    title: "Extract Blood"
  };
  render() {
    return (
      <Box>
        <TitleText>Extract Blood</TitleText>
        <LeftTextBox />
        <Picture source={require("../Images/8A.png")} />
        <LeftTextBox>     Place tip of lancet on the clean finger.</LeftTextBox>
        <LeftTextBox>       Firmly push down on the other end.</LeftTextBox>
        <LeftTextBox />
        <Picture source={require("../Images/8B.png")} />
        <LeftTextBox>         You will feel a momentary pinprick.</LeftTextBox>
        <LeftTextBox>         Afterwards, discard lancet in trash.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions8")} >
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

export { Instructions7 };
