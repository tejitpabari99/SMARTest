import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture,LeftTextBox } from "./Styles";
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

        <LeftTextBox />
        <Picture source={require("../Images/13A.jpg")} />
        <LeftTextBox>       Pick up solution tube #3 </LeftTextBox>
        <LeftTextBox />
        <Picture source={require("../Images/13B.png")} />
        <LeftTextBox>Remove the cap and pour on to the center of</LeftTextBox>
          <LeftTextBox>                       the test membrane.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.checkUserSelection()} >
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

export { Instructions12 };
