import React, { Component } from "react";

import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture } from "./Styles";


class Instructions extends Component {
  static navigationOptions = {
    title: "Material List"
  };
  render() {
    return (
      <Box>
        <TitleText>Material List</TitleText>

        <TextBoxTitle>INSTI MULTIPLEX Kit Material</TextBoxTitle>
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
        <CenterTextBox>Single use Lancet</CenterTextBox>
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

      </Box>

    );
  }
}

export { Instructions };
