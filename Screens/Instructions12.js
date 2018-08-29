import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions12 extends Component {
  static navigationOptions = {
    title: "Running the Test - 2"
  };

  checkUserSelection = () => {
    if (global.userSelection === 0 || global.userSelection === 2) {
      this.props.navigation.navigate("TakePicture");
    } else if (global.userSelection === 1) {
      this.props.navigation.navigate("GuestTakePicture");
    }
  };

  render() {
    return (
      <Box>
        <TitleText>Running the Test - 2</TitleText>

        <CenterTextBox />
        <Picture source={require("../Images/13A.jpg")} />
        <CenterTextBox> Pick up solution tube #3 </CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/13B.jpg")} />
        <CenterTextBox>Remove the cap and pour on to the center of the test membrane.</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.checkUserSelection()} >
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

export { Instructions12 };
