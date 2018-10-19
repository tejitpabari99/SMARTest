import React, { Component } from "react";
import {Text, View} from "react-native";

import { TitleText, Box, Picture, GreenRoundButton, TextBox } from "./Styles";
import firebase from 'firebase';

var newVar = {}
newVar['userResult'] = 'blah'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    return {
      title: "SMARTtest",
      headerLeft: null,
    }
  };
  // <GreenRoundButton onPress={() => this.props.navigation.navigate("Results", {newVar})} >
  // <GreenRoundButton onPress={() => this.props.navigation.navigate("PreResults", {newVar})} >
  // <GreenRoundButton onPress={() => this.props.navigation.navigate("TestSelection")} >

  /*

*/
  render() {
    return (
        <Box>
          <TitleText>SMARTtest</TitleText>

          <Picture
            source={require("../Images/loginPic.jpg")}
          />
          <TextBox />
          <TextBox>SMARTtest is a companion app to rapid HIV and syphilis tests.</TextBox>
          <TextBox />

          <TextBox> SMARTtest will walk you through the testing process, interpret your result and provide resources for the next steps.</TextBox>
          <TextBox />
          <GreenRoundButton onPress={() => this.props.navigation.navigate("TestSelection")} >
            Get Started
          </GreenRoundButton>
        </Box>
    );
  }
}

export { HomeScreen };
