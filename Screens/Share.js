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
      id: ""
    };
  }

  componentWillMount() {
    var newSnap;
    var userId = firebase.auth().currentUser.uid;
    const ref = firebase.database().ref("users/" + userId + "/tests/");
    ref.limitToLast(1).on("child_added", snapshot => {
      newSnap = snapshot.val();
      this.setState({
        hiv: newSnap.hiv,
        syphilis: newSnap.syphilis,
        date: newSnap.date,
        id: newSnap.id
      });
    });
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
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
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
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  renderButtonPhone() {
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
            onPress={() => this.sendText()}
          >
            <Text>Send Text</Text>
          </Button>
        </TouchableOpacity>
      </View>
    );
  }

  renderButtonEmail() {
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
            onPress={() => this.sendEmail()}
          >
            <Text>Send Email</Text>
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
            <Label>Phone Number</Label>
            <Input
              autoCorrect={false}
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
            />
          </Item>
          <View>{this.renderButtonPhone()}</View>

          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <View>{this.renderButtonEmail()}</View>
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
    justifyContent: "flex-start"
  }
});

export { Share };
