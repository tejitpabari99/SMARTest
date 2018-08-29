import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class NewLancetAddition extends Component {
  static navigationOptions = {
    title: "Discarding Lancet"
  };
  render() {
    return (
      <Box>
        <TitleText>Discarding Lancet</TitleText>

        <CenterTextBox />
        <CenterTextBox> The INSTI Multiplex includes a pouch containing a yellow lancet, alcohol pad and capillary tube.</CenterTextBox>
        <Picture source={require("../Images/LancetNew.jpeg")} />

        <CenterTextBox> Please discard this pouch. You will not be using these materials.</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions10")} >
          Next
        </GreenRoundButton>

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

export { NewLancetAddition };
