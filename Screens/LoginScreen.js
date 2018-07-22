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

import { GreenRoundButton, BlueRoundButton } from './Styles';

class LoginScreen extends Component {
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

  renderButton() {
    if (this.state.isLoading) {
      return <Spinner color={"red"} />;
    }
    return (
      <View>
          <GreenRoundButton onPress={() => this.loginUser()}>
            Log in
          </GreenRoundButton>

          <BlueRoundButton onPress={() => this.props.navigation.navigate("SignupScreen")}>
            Dont have an Account?
          </BlueRoundButton>
      </View>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Image
            source={require("../Images/SMARTest.png")}
            style={{ alignSelf: 'center', marginBottom:15, }}
          />
        <Form>
          <View>
            <Text style={styles.errorText}>{this.state.error}</Text>
          </View>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize={'none'}
              autoFocus={false}
              onChangeText={email => this.setState({ email })}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize={'none'}
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
    fontSize: 15,
    alignSelf: "center",
    color: "red"
  }
});

export { LoginScreen };
