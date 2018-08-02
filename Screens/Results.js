import React, { Component } from "react";
import * as firebase from 'firebase';
import { View } from 'react-native';
import { TitleText, SuccessText, Box, GreenBlockButton, BlueBlockButton, GreenRoundButton, TextBox, TextBoxTitle, LeftTextBox, Card, CardSection, CardText } from "./Styles";


const temp_hiv = Math.floor(Math.random() * 2);
const temp_syphilis = Math.floor(Math.random() * 2);
const tempResult = {
  hiv: temp_hiv,
  syphilis: temp_syphilis
}
const GOOGLE_APPLICATION_CREDENTIALS='./GOOGLE_APPLICATION_CREDENTIALS.json';

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
    countSave: 0
  }

  checkUserSelection = () => {
    if (global.userSelection === 2) {
      return (
        <GreenBlockButton onPress={() => this.props.navigation.navigate("GuestResults")} >
          Partner Results
        </GreenBlockButton>
      );
    }
  };

  // predict_json = (project, model, instance, version) => {
  //   var service = googleapiclient.discovery.build('ml', 'v1');
  //   var name = `projects/${project}/models/${model}`;
  //   if (version === 'None') {
  //     name = name + `/versions/${version}`;
  //   }
  //   var response = service.projects().predict(
  //     name=name,
  //     body={'instances': instances}
  //   ).execute()
  //   console.log(response);
  //   // if ()'error' in response:
  //   //     raise RuntimeError(response['error'])
  //   return response['predictions']
  // }

  // calculateResult = () => {
  //   var sample_array = new Array(32);
  //   for (var i = 0; i < 32; i++) {
  //     sample_array[i] = new Array(32);
  //     for(var j=0; j<32; j++){
  //       sample_array[i][j] = 0;
  //     }
  //   }
  //
  //   const project = 'smartest-df9af';
  //   const model = 'machinelearning';
  //   const picture = '../Images/5.jpg';
  //
  //   const instance = {
  //     'image': sample_array
  //   }
  //   const version = 'version1';
  //   this.predict_json(project, model, instance, version)
  // }
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


  /*
  // get model, instance and version from Ongun
  // Send json data to a deployed model for prediction.
  //   Args:
  //     project (str): project where the Cloud ML Engine Model is deployed.
  //     model (str): model name.
  //     instances ([Mapping[str: Any]]): Keys should be the names of Tensors
  //       your deployed model expects as inputs. Values should be datatypes
  //       convertible to Tensors, or (potentially nested) lists of datatypes
  //       convertible to tensors.
  //     version: str, version of the model to target.
  //   Returns:
  //     Mapping[str: any]: dictionary of prediction results defined by themodel.
  // project = ''
  */

  saveToFirebase = () => {
    var userId = firebase.auth().currentUser.uid;
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
    //save Result code
  }

  render() {
    {this.saveToFirebase()}
    return (

      <Box>
        <TitleText>Your Results are</TitleText>
        <Card>
          <CardSection>
              <CardText> Date - {this.state.date}</CardText>
              <CardText> ID - {this.state.id}</CardText>
          </CardSection>
          <CardSection>
            <CardText> HIV - {this.state.test_hiv}</CardText>
            <CardText> SYPHILIS - {this.state.test_syphilis}</CardText>
          </CardSection>
        </Card>
        <TextBox />
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
        <LeftTextBox>Any positive results should be confirmed by a healthcare provider.</LeftTextBox>
        <LeftTextBox>Negative results may not detect a recent infection. For more information, click on the resources tab.</LeftTextBox>

        <GreenRoundButton onPress={() => this.props.navigation.navigate("TestSelection")} >
          New Test
        </GreenRoundButton>
      </Box>
    );
  }
}

export { Results };
