import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions extends Component {
  static navigationOptions = {
    title: "Material List"
  };
  render() {
    return (
      <Box>

        <TitleText>Material List</TitleText>

        <CenterTextBox />
        <Picture source={require("../Images/membraneUnit.jpg")} />
        <CenterTextBox>Membrane Unit</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/5.jpg")} />
        <CenterTextBox>Solution 1 Vial</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/12A.jpg")} />
        <CenterTextBox>Solution 2 Vial</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/13A.jpg")} />
        <CenterTextBox>Solution 3 Vial</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/lancet.jpg")} />
        <CenterTextBox>Single-use Lancet</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/alcohol.jpg")} />
        <CenterTextBox>Alcohol Swab</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/7A.jpg")} />
        <CenterTextBox>Gauze Pad</CenterTextBox>
        <CenterTextBox />
        <Picture source={require("../Images/bandage.jpg")} />
        <CenterTextBox>Bandage</CenterTextBox>
        <CenterTextBox />
        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions2")} >
          Next
        </GreenRoundButton>
        <Text></Text>
        <Text></Text>



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

export { Instructions };
