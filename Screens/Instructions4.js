import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture,LeftTextBox } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions4 extends Component {
  static navigationOptions = {
    title: "Prepare Sample Collector"
  };
  render() {
    return (
      <Box>
        <TitleText>Prepare Sample Collector</TitleText>

        <LeftTextBox />
        <Picture source={require("../Images/redVile.jpg")} />
        <LeftTextBox>Pick up the Solution tube #1 with the red cap </LeftTextBox>
        <LeftTextBox>                   and twist open the cap.</LeftTextBox>
        <Text></Text>

        <LeftTextBox>             Place it nearby for future use.</LeftTextBox>
        <LeftTextBox>            Be careful not to knock it over!</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions5")} >
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

export { Instructions4 };
