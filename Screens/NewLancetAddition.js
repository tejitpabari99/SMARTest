import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture,LeftTextBox } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class NewLancetAddition extends Component {
  static navigationOptions = {
    title: "Discarding Lancet"
  };
  render() {
    return (
      <Box>
        <TitleText>Discarding Lancet</TitleText>

        <LeftTextBox />
        <LeftTextBox>         The INSTI Multiplex includes a pouch </LeftTextBox>
          <LeftTextBox>   containing a yellow lancet, alcohol pad and</LeftTextBox>
          <LeftTextBox>                           capillary tube.</LeftTextBox>
          <Text></Text>
        <Picture source={require("../Images/LancetNew.jpeg")} />

        <LeftTextBox>   Please discard this pouch. You will not be </LeftTextBox>
        <LeftTextBox>                   using these materials.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions10")} >
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

export { NewLancetAddition };
