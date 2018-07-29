import React, { Component } from "react";
import { View, KeyboardAvoidingView, Image, StyleSheet } from "react-native";
import * as firebase from "firebase";

import { GreenRoundButton, BlueRoundButton, ErrorText, TextInput, Logo } from './Styles';

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      isLoading: false
    };
  }

  static navigationOptions = {
    title: "Sign up"
  };

  signupUser = () => {
    if (this.state.password.length < 8) {
      return this.setState({ error: "Your password should contain at least 8 characters." });
    }
    const { email, password } = this.state;
    this.setState({ error: '', isloading: true });

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(this.onSignupSuccess.bind(this))
    .catch((error) => {
      return this.setState({ error: error.message, isLoading: false });
    });
  };

  onSignupSuccess() {
    this.setState({
      email: "",
      password: "",
      isLoading: false,
      error: ""
    });
    this.writeUserData()
    this.props.navigation.navigate("HomeScreen");
  }

  writeUserData = () => {
    var userId = firebase.auth().currentUser.uid
    var today = new Date();
    var date = (today.getMonth()+1)+'.'+today.getDate()+'.'+today.getFullYear();
    firebase.database().ref('users/' + userId).set({
      accountCreated: date
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Logo />
        <ErrorText>{this.state.error}</ErrorText>
        <TextInput onChangeText={email => this.setState({ email })}> Email </TextInput>
        <TextInput secureTextEntry={true} onChangeText={password => this.setState({ password })}> Password </TextInput>

        <BlueRoundButton onPress={() => this.signupUser()}>
          Create An Account
        </BlueRoundButton>

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

export { SignupScreen };
