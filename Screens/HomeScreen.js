import React, { Component } from "react";
import {Button, View, Text} from 'react-native'
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
//<View>
          <TitleText>SMARTtest</TitleText>

          <Picture
            source={require("../Images/loginPic.jpg")}
          />
          <TextBox />
          <TextBox>SMARTtest is a companion app to rapid HIV and </TextBox>
          <TextBox>                           Syphilis tests.</TextBox>
          <Text></Text>
          <TextBox>   SMARTtest will walk you through the testing </TextBox>
          <TextBox>     process, interpret your result and provide  </TextBox>
          <TextBox>            resources for the next steps.</TextBox>
          <Text></Text>

                                                                          //TestSelection
          <GreenRoundButton onPress={() => this.props.navigation.navigate("TestSelection")} >
            Get Started
          </GreenRoundButton>

        //</View>

        </Box>

    );
  }
}

export { HomeScreen };
