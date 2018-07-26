import React, { Component } from "react";
import { Box, GreenRoundButton, BlueRoundButton, ErrorText, TextInput, Logo, SuccessText } from './Styles';

import axios from "axios";
import * as firebase from "firebase";

class Share extends Component {
  static navigationOptions = {
    title: "Share"
  };

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      hiv: "",
      syphilis: "",
      email: "",
      date: "",
      id: "",
      successText: "",
      errorText: "",
    };
  }

  sendText = () => {
    axios
      .post(
        "https://us-central1-smartest-df9af.cloudfunctions.net/sendMessage",
        {
          phone: this.state.phoneNumber,
          hiv: this.state.hiv,
          syphilis: this.state.syphilis,
          date: this.state.date,
          id: this.state.id
        }
      )
      .then(function(response) {
        console.log(response)
        this.setState({
          successText: "Your results have been shared",
          errorText: "",
          phoneNumber: "",
          email: ""
        })
      })
      .catch(function(error) {
        this.setState({
          successText: "",
          errorText: error.toString(),
          phoneNumber: "",
          email: ""
        })
      });
  };

  sendEmail = () => {
    axios
      .post("https://us-central1-smartest-df9af.cloudfunctions.net/sendEmail", {
        email: this.state.email,
        hiv: this.state.hiv,
        syphilis: this.state.syphilis,
        date: this.state.date,
        id: this.state.id
      })
      .then(function(response) {
        console.log(response)
        this.setState({
          successText: "Your results have been shared",
          errorText: "",
          phoneNumber: "",
          email: ""
        })
      })
      .catch(function(error) {
        this.setState({
          successText: "",
          errorText: error.toString(),
          phoneNumber: "",
          email: ""
        })
      });
  };

  render() {
    var that = this;
    return (
      <Box>
        <TextInput
        value={this.state.phoneNumber}
        onChangeText={
          phoneNumber => this.setState({
          phoneNumber: phoneNumber,
          hiv: this.props.navigation.state.params.newVar.hiv,
          syphilis: this.props.navigation.state.params.newVar.syphilis,
          date: this.props.navigation.state.params.newVar.date,
          id: this.props.navigation.state.params.newVar.id
          })
        }>
          Phone Number
        </TextInput>
        <GreenRoundButton onPress={() => this.sendText()}>
          Send Text
        </GreenRoundButton>

        <TextInput
        onChangeText={
          email => this.setState({
            email: email,
            hiv: this.props.navigation.state.params.newVar.hiv,
            syphilis: this.props.navigation.state.params.newVar.syphilis,
            date: this.props.navigation.state.params.newVar.date,
            id: this.props.navigation.state.params.newVar.id
          })
        }>
          Email
        </TextInput>
        <BlueRoundButton onPress={() => this.sendEmail()}>
          Send Email
        </BlueRoundButton>

        <SuccessText>{this.state.successText} </SuccessText>
        <ErrorText>{this.state.errorText} </ErrorText>


      </Box>
    );
  }
}

export { Share };
