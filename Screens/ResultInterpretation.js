import React, { Component } from "react";
import {Text, Alert, Image, StyleSheet} from "react-native";
import call from 'react-native-phone-call';
import { TitleText, Box, TextBoxTitle, GreenBlockButton, CenterTextBox, Picture } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class ResultInterpretation extends Component {
  static navigationOptions = {
    title: "Resources"
  };

  callHotline = () => {
    Alert.alert(
      'Dial Hotline',
      'Clicking on this will initiate a call with a 24 hour hotline. Do you want to call the hotline for immediate assistance now?',
      [
        {text: 'OK', onPress: () => this.call()},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  }

  call = () => {
    const args = {
      number: '18002324636',
      prompt: false
    }

    call(args).catch(console.error)
  }

  render() {
    return (
      <Box>
        <TitleText>Result Interpretation key</TitleText>
        <CenterTextBox />
        <Image source={require("../Images/interpretation01.jpg")} style={styles.pic}/>
        <CenterTextBox />
        <Image source={require("../Images/interpretation02.jpg")} style={styles.pic}/>
        <CenterTextBox />
        <Image source={require("../Images/interpretation03.jpg")} style={styles.pic}/>
        <CenterTextBox />
        <Image source={require("../Images/interpretation04.jpg")} style={styles.pic}/>
        <CenterTextBox />
        <CenterTextBox />
        <CenterTextBox> If no dots appear, then the test is invalid.</CenterTextBox>
        <CenterTextBox />
        <GreenBlockButton onPress={() => this.callHotline()} >
          Call Hotline!
        </GreenBlockButton>

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

const styles = StyleSheet.create({
  pic: {
    fwidth: 343,
    height: 200,
    marginBottom:2,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
});

export { ResultInterpretation };
