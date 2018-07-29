import React, { Component } from "react";

import { TitleText, Box, Picture, GreenRoundButton, TextBox } from "./Styles";

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
          <TextBox />
          <TextBox>SmartTest is a companion app to rapid HIV and Syphillis tests. </TextBox>
          <TextBox>SmartTest will walk you through the testing process, interpret your result and provide resources for the next steps. </TextBox>
          <TextBox />

          <GreenRoundButton onPress={() => this.props.navigation.navigate("Results")} >
            Get Started
          </GreenRoundButton>

        </Box>
    );
  }
}

export { HomeScreen };
