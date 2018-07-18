import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      isLoading: false
    };
    // this.props.navigation.navigate("HomeScreen");
  }

  loginUser = (email, password) => {
    try {
      this.setState({ error: "", isLoading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onLoginSuccess.bind(this));
    } catch (error) {
      this.setState({ isLoading: false });
      this.setState({ error: error.toString() });
      console.log(error.toString());
    }
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

  static navigationOptions = {
    title: "SMARTest Login Page"
  };

  renderButton() {
    if (this.state.isLoading) {
      return <Spinner color={"red"} />;
    }
    return (
      <View>
        <TouchableOpacity>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() =>
              this.loginUser(this.state.email, this.state.password)
            }
          >
            <Text>Log in</Text>
          </Button>
        </TouchableOpacity>

        <TouchableOpacity>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.props.navigation.navigate("SignupScreen")}
          >
            <Text style={{ color: "white" }}>Dont have an Account?</Text>
          </Button>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize={'none'}
              autoFocus={true}
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
            <Text style={styles.errorText}>{this.state.error}</Text>
          </View>
        </Form>
      </Container>
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
