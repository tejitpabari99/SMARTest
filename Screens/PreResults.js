import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenBlockButton, CenterTextBox, Picture } from "./Styles";

class PreResults extends Component {
  static navigationOptions = {
    title: "Results"
  };

  checkUserSelection = () => {
    var newVar = this.props.navigation.state.params.newVar
    if (global.userSelection === 1) {
      return (
        <GreenBlockButton onPress={() => this.props.navigation.navigate("GuestResults", {newVar})} >
          Results
        </GreenBlockButton>
      );
    }
    else {
      return (
        <GreenBlockButton onPress={() => this.props.navigation.navigate("Results", {newVar})} >
          Results
        </GreenBlockButton>
      );
    }
  }

  render() {
    return (
      <Box>
        <TitleText>Results</TitleText>

        <CenterTextBox />
        <CenterTextBox> Your results will now be shown on the next page. </CenterTextBox>
        <CenterTextBox />
        <CenterTextBox />
        {this.checkUserSelection()}
      </Box>
    );
  }
}

export { PreResults };
