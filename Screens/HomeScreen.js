import React, { Component } from "react";
import {Button} from 'react-native'
import { TitleText, Box, Picture, GreenRoundButton, TextBox } from "./Styles";
import firebase from 'firebase';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;

    return {
      title: "SMARTtest",
      headerLeft: null,
    }

    // headerLeft: null,
    // headerRight: (
    //   <Button
    //     onPress={() => alert('Logged Out!\n(Actually this doesn\'t do anything right now.)')}
    //     title="Log Out"
    //   />
    // ),
  };

  render() {
    return (
        <Box>
          <TitleText>SMARTtest</TitleText>

          <Picture
            source={require("../Images/loginPic.jpg")}
          />
          <TextBox />
          <TextBox>SMARTtest is a companion app to rapid HIV and Syphilis tests. </TextBox>
          <TextBox>SMARTtest will walk you through the testing process, interpret your result and provide resources for the next steps. </TextBox>
          <TextBox />

          <GreenRoundButton onPress={() => this.props.navigation.navigate("TestSelection")} >
            Get Started
          </GreenRoundButton>

        </Box>
    );
  }
}

export { HomeScreen };
