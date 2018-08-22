import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture,LeftTextBox } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class BlueLancet extends Component {
  static navigationOptions = {
    title: "Pulling Blue Lancet"
  };
  render() {
    return (
      <Box>
        <TitleText>Pulling Blue Lancet</TitleText>

        <LeftTextBox />
        <LeftTextBox>     Pull the clear cap from the top of the blue  </LeftTextBox>
        <LeftTextBox>                                   lancet. </LeftTextBox>
        <Text></Text>
        <Picture source={require("../Images/blueLancet.jpeg")} />
        <Text></Text>

        <LeftTextBox>             Place it nearby for future use.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions11")} >
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

              <Button onPress={() => this.props.navigation.navigate("Results")}>
                                    <Text>Results</Text>
                                    </Button>

        </FooterTab>

      </Box>
    );
  }
}

export { BlueLancet };
