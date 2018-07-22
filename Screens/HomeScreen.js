import React, { Component } from "react";

import { TitleText, Box, Picture, GreenButton, TextBox } from "./Styles";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "SMARTest",
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
          <TitleText>SMARTTest</TitleText>

          <Picture
            source={require("../Images/loginPic.jpg")}
          />

          <TextBox>SmartTest is a companion app to rapid HIV and Syphillis tests. </TextBox>
          <TextBox>SmartTest will walk you through the testing process, interpret your result and provide resources for the next steps. </TextBox>
          <TextBox />

          <GreenButton onPress={() => this.props.navigation.navigate("Results")} >
            Get Started
          </GreenButton>
          
        </Box>
    );
  }
}

export { HomeScreen };
