import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button
} from "react-native";

import { TitleText, Box, Picture, GreenButton } from "./Styles";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "SMARTest",
    headerLeft: null,
    headerRight: (
      <Button
        onPress={() => alert('Logged Out!\n(Actually this doesn\'t do anything right now.)')}
        title="Log Out"
      />
    ),
  };

  render() {
    return (
        <Box>
          <TitleText> Welcome to SmartTest! </TitleText>
          <Picture
            source={require("../Images/loginPic.jpg")}
          />
          <Text>SmartTest is a companion app to rapid HIV and syphillis tests. </Text>
          <Text>SmartTest will walk you through the testing process, interpret your result and provide resources for the next steps. </Text>

          <GreenButton onPress={() => this.props.navigation.navigate("SavedResults")} >
            Get Started
          </GreenButton>

        </Box>
    );
  }
}
const styles = StyleSheet.create({
  title: {
  	fontWeight: 'bold',
  	fontSize: 20,
  	marginBottom:15,
    alignSelf: 'center',
  }
});

export { HomeScreen };
