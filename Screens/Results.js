/*
  Add this:

          // <Button
          //   onPress={() => this.props.navigation.navigate("Hotline")}
          //   title="DIAL HOTLINE"
          // />


*/
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Container } from "native-base";
import * as firebase from 'firebase';

const temp_hiv = Math.floor(Math.random() * 2);
const temp_syphilis = Math.floor(Math.random() * 2);
const tempResult = {
  hiv: temp_hiv,
  syphilis: temp_syphilis
}

class Results extends Component {
  static navigationOptions = {
    title: "Results"
  };

  state = {
    status: '',
    errorMessage: null,
    test_hiv: null,
    test_syphilis: null,
    date: null,
    id: null,
    location: null,
    countDelete: 0,
    countSave: 0
  }

  calculateResult = (result) => {
    var hiv, syphilis = '';

    var lat = 40.7999209;
    var lng = -73.96831020000002;
    var location = lat + " , " + lng;

    var today = new Date();
    var date = today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
    var time = today.getTime();

    if(result.hiv === 0) {
      hiv = 'Negative';
    }
    else {
      hiv = 'Positive';
    }

    if(syphilis === 0) {
      syphilis = 'Negative';
    }
    else {
      syphilis = 'Positive';
    }

    this.setState({
      test_hiv: hiv,
      test_syphilis: syphilis,
      location: location,
      date: date,
      id: time
    });
  }

  saveToFirebase = () => {
    var userId = firebase.auth().currentUser.uid;
    console.log(userId);
    console.log(this.state.test_hiv);
    firebase.database().ref("users/" + userId + "/tests").push({
        hiv: this.state.test_hiv,
        syphilis: this.state.test_syphilis,
        location: this.state.location,
        date: this.state.date,
        id: this.state.id
      });
  }

  componentWillMount() {
    this.calculateResult(tempResult);
  }

  saveResult = () => {
    if(this.state.countDelete === 1){
      this.setState({ status: 'You have deleted your results. '})
      return;
    }
    if(this.state.countSave === 1){
      this.setState({ status: 'Your results have already been saved. Please see the saved results page.' })
      return;
    }
    this.setState({
      status: 'Your Results have been saved',
      countSave: 1
    });
    return;
    //save Result code
  }

  deleteResult = () => {
    if(this.state.countDelete === 1){
      this.setState({ status: 'You have already deleted results. '})
      return;
    }
    if(this.state.countSave === 1){
      this.setState({ status: 'Your results have been saved. Please see the saved results page to delete the result.' })
      return;
    }
    this.setState({
      status: 'Your Results have been deleted',
      countDelete: 1
    });
    //retrive data from firebase and delete results.
    return;
  }


  render() {
    {this.saveToFirebase()}
    return (
      <Container>
        <View>
          <Text> Result </Text>
          <Text> YOUR RESULT IS DISPLAYED HERE: </Text>
          <Text> HIV - {this.state.test_hiv}</Text>
          <Text> SYPHILIS - {this.state.test_syphilis}</Text>
          <Text> Date - {this.state.date}</Text>
          <Text> ID - {this.state.id}</Text>

          <Button
            onPress={() => this.saveResult()}
            title="Save"
          />
          <Text />
          <Button
            onPress={() => this.deleteResult()}
            title="Delete"
          />
          <Text />
          <Button
            onPress={() => this.props.navigation.navigate("Share")}
            title="Share"
          />
          <Text />
          <Text />
          <Button
            onPress={() => this.props.navigation.navigate("Resources")}
            title="Resources"
          />
          <Text />
        </View>
        <View>
          <Text> {this.state.status} </Text>
        </View>
        <View>
          <Text />
          <Text />
          <Text> Any positive results should be confirmed by a </Text>
          <Text> healthcare provider.</Text>
          <Text />
          <Text />
          <Text>Negative results may not detect a recent infection. For</Text>
          <Text> for more information, click on the resources tab.</Text>
          <Text />
          <Text />
          <Button
            onPress={() => this.props.navigation.navigate("TestSelection")}
            title="New Test"
          />
          <Text />
        </View>
      </Container>
    );
  }
}

export { Results };
