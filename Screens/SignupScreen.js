import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Image } from "react-native";
import {
  Container,
  Content,
  Header,
  Button,
  Label,
  Form,
  Item,
  Input,
  Spinner
} from "native-base";
import * as firebase from "firebase";

import { BlueButton } from './Styles';

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
    title: "SMARTest Sign up"
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

  renderButton() {
    if (this.state.isLoading) {
      return <Spinner color={"red"} />;
    }
    return (
      <View>
        <BlueButton onPress={() => this.signupUser()}>
          Create An Account
        </BlueButton>
      </View>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Form>
          <Image
            source={require("../Images/SMARTest.png")}
            style={{ alignSelf: 'center', marginBottom:15, }}
          />
          <View>
            <Text style={styles.errorText}>{this.state.error}</Text>
          </View>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              onChangeText={email => this.setState({ email })}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              onChangeText={password => this.setState({ password })}
            />
          </Item>

          <View>
            {this.renderButton()}
          </View>
          <View style={{ height: 60 }} />

        </Form>
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
  },
  errorText: {
    fontSize: 13,
    alignSelf: "center",
    color: "red"
  }
});

export { SignupScreen };
