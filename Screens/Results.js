import React, { Component } from "react";
import * as firebase from 'firebase';
import { View } from 'react-native';
import { TitleText, SuccessText, Box, GreenBlockButton, BlueBlockButton, GreenRoundButton, TextBox, TextBoxTitle, LeftTextBox, Card, CardSection, CenterTextBox, CardText, ErrorText } from "./Styles";


const temp_hiv = Math.floor(Math.random() * 2);
const temp_syphilis = Math.floor(Math.random() * 2);
const tempResult = {
  hiv: temp_hiv,
  syphilis: temp_syphilis
}
const GOOGLE_APPLICATION_CREDENTIALS='./GOOGLE_APPLICATION_CREDENTIALS.json';

class Results extends Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    return {
      title: "Results",
      headerLeft: null,
    }
  };

  state = {
    status: '',
    errorMessage: '',
    test_hiv: null,
    test_syphilis: null,
    date: null,
    id: null,
    location: null,
    countSave: 0
  }

  checkUserSelection = () => {
    if (global.userSelection === 2) {
      var newVar = this.props.navigation.state.params.newVar
      return (
        <GreenBlockButton onPress={() => this.props.navigation.navigate("GuestResults", {newVar})} >
          Partner Results
        </GreenBlockButton>
      );
    }
  };

  calculateResult = (userResult) => {
    var hiv, syphilis = '';

    var lat = 40.7999209;
    var lng = -73.96831020000002;
    var location = lat + " , " + lng;

    var today = new Date();
    var date = today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear() + " / " + today.getHours() + ":" + today.getMinutes();
    var time = today.getTime();
    var error = ''
    if(userResult === 0) {
      hiv = 'Negative';
      syphilis = 'Negative'
    }
    else if(userResult === 1){
      hiv = 'Negative';
      syphilis = 'Positive'
    }
    else if(userResult === 2){
      hiv = 'Positive';
      syphilis = 'Negative'
    }
    else if(userResult === 3){
      hiv = 'Positive';
      syphilis = 'Positive'
    }
    else {
      hiv = 'Invalid';
      syphilis = 'Invalid';
      error = 'Invalid Results. Please do the test again.'
    }

    this.setState({
      test_hiv: hiv,
      test_syphilis: syphilis,
      location: location,
      date: date,
      id: time,
      errorMessage: error
    });
  }

  saveToFirebase = () => {
    var userId = firebase.auth().currentUser.uid;
    var that = this;
    var key = firebase.database().ref("users/" + userId + "/tests").push().key;
    firebase.database().ref("users/" + userId + "/tests/" + key).update({
      hiv: this.state.test_hiv,
      syphilis: this.state.test_syphilis,
      location: this.state.location,
      date: this.state.date,
      id: this.state.id
    });

    var picture = this.props.navigation.state.params.newVar.imageData
    var pictureString = `data:image/jpg;base64,${picture}`;
    var storageRef = firebase.storage().ref();
    var childString = `users/${userId}/tests/${key}/`;
    var childRef = storageRef.child(`${childString}`)
    fetch(pictureString)
        .then(res => res.blob())
        .then(blob => {
          childRef.put(blob)
            .then(function(snapshot) {
              console.log('Uploaded an image!');
            })
        })
        .catch(err => console.log(err))
    this.props.navigation.state.params.newVar = {}
  }

  componentWillMount() {
    var userResult = parseInt(this.props.navigation.state.params.newVar.userResult)
    this.calculateResult(userResult);
    // this.calculateResult(tempResult);
  }

  toShare = () => {
    var newVar = {
      hiv: this.state.test_hiv,
      syphilis: this.state.test_syphilis,
      date: this.state.date,
      id: this.state.id
    }
    this.props.navigation.navigate("Share", {newVar})
  }

  saveResult = () => {
    if(this.state.countSave === 1){
      this.setState({ status: 'Your results have already been saved.\nPlease see the saved results page.' })
      return;
    }
    this.setState({
      status: 'Your Results have been saved',
      countSave: 1
    });
    return;
  }

  render() {
    if(this.props.navigation.state.params.newVar.hasOwnProperty('userResult')) {
      {this.saveToFirebase()}
    }
    return (

      <Box>
        <TitleText>Your Results are</TitleText>
        <Card>
          <CardSection>
              <CardText> Date: {this.state.date}</CardText>
              <CardText> ID: {this.state.id}</CardText>
          </CardSection>
          <CardSection>
            <CardText> HIV: {this.state.test_hiv}</CardText>
            <CardText> SYPHILIS: {this.state.test_syphilis}</CardText>
          </CardSection>
        </Card>
        <TextBox />
        <ErrorText> {this.state.errorMessage} </ErrorText>
        <SuccessText> {this.state.status} </SuccessText>
        <TextBox />
        <GreenBlockButton onPress={() => this.saveResult()} >
          Save
        </GreenBlockButton>
        <BlueBlockButton onPress={() => this.props.navigation.navigate("SavedResults")} >
          Results
        </BlueBlockButton>
        <GreenBlockButton onPress={() => this.toShare()} >
          Share
        </GreenBlockButton>
        <BlueBlockButton onPress={() => this.props.navigation.navigate("Resources")} >
          Resources
        </BlueBlockButton>
        <LeftTextBox />
        {this.checkUserSelection()}
        <LeftTextBox />
        <LeftTextBox />
        <TextBoxTitle>Note</TextBoxTitle>
        <CenterTextBox>Any positive results should be confirmed by a healthcare provider.</CenterTextBox>
        <CenterTextBox>Negative results may not detect a recent infection. For more information, click on the resources tab.</CenterTextBox>

        <GreenRoundButton onPress={() => this.props.navigation.navigate("TestSelection")} >
          New Test
        </GreenRoundButton>
      </Box>
    );
  }
}

export { Results };
