import React, { Component } from "react";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, TextBox, Picture } from "./Styles";


class VideoInfo extends Component {
  static navigationOptions = {
    title: "Video Info"
  };

  render() {
    return (
      <Box>
        <TitleText>Video Info</TitleText>

        <TextBox />
        <TextBox>First you will see a short instructional video that </TextBox>
        <TextBox>         provides an overview of the test.</TextBox>
        <TextBox />
        <TextBox>Then you will see step-by-step instructions to run</TextBox>
        <TextBox>                         the test yourself.</TextBox>
        <TextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("VideoPlayer2")} >
          Next
        </GreenRoundButton>

      </Box>
    );
  }
}

export { VideoInfo };
