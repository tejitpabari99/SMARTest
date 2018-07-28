import React, { Component } from "react";
import { View, KeyboardAvoidingView, Image, StyleSheet } from "react-native";
import * as firebase from "firebase";

import { GreenRoundButton, BlueRoundButton, SuccessText, ErrorText, TextInput, TextBox, Logo } from './Styles';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      successText: "",
      errorText: "",
    };
  }

  static navigationOptions = {
    title: "Forgot Password"
  };

  passwordReset = () => {
    firebase.auth().sendPasswordResetEmail(this.state.email).then(() => {
      return this.setState({ successText:"A password reset email has been sent to you. Please check your inbox."})
    }).catch((error) => {
      return this.setState({ errorText:error.message})
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Logo />

        <TextInput onChangeText={email => this.setState({ email })}> Email </TextInput>
        <BlueRoundButton onPress={() => this.passwordReset()}>
          Reset Password
        </BlueRoundButton>

        <TextBox />
        <SuccessText>{this.state.successText}</SuccessText>
        <ErrorText>{this.state.errorText}</ErrorText>

        <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center"
  }
});

export { ForgotPassword };
