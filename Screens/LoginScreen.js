import React, { Component } from "react";
import { View, KeyboardAvoidingView, Image, StyleSheet, Keyboard } from "react-native";
import * as firebase from "firebase";

import { GreenRoundButton, BlueRoundButton, ErrorText, TextInput, Logo, ForgotPassword } from './Styles';

class LoginScreen extends Component {
  static navigationOptions = {
    title: "",
    headerLeft: null,
    headerRight: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      isLoading: false
    };
  }

  loginUser = () => {
    Keyboard.dismiss();
    const { email, password } = this.state;
    this.setState({ error: '', isloading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch((error) => {
      return this.setState({ isLoading: false, error: error.message });
    });
  };

  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      isLoading: false,
      error: ""
    });
    this.props.navigation.navigate("HomeScreen");
  }
  // <ForgotPassword onPress={() => this.props.navigation.navigate("ForgotPassword")}>Forgot Password</ForgotPassword>

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Logo />
        <ErrorText>{this.state.error}</ErrorText>
        <TextInput onChangeText={email => this.setState({ email: email+"@smartest-app.com" })}> UserName </TextInput>
        <TextInput secureTextEntry={true} onChangeText={password => this.setState({ password })}> Password </TextInput>

        <GreenRoundButton onPress={() => this.loginUser()}>
          Log in
        </GreenRoundButton>
        <BlueRoundButton onPress={() => this.props.navigation.navigate("SignupScreen")}>
          Dont have an account?
        </BlueRoundButton>

        <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    padding: 15,
    justifyContent: "center"
  },
});

export { LoginScreen };
