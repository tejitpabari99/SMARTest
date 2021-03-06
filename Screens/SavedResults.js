import React, { Component } from "react";
import { TitleText, Box, GreenSmallButton, BlueSmallButton, TextBox, Card, CardSection, CardText, ErrorText } from "./Styles";
import {View, ScrollView, Alert} from 'react-native';
import {Spinner} from "native-base";

import * as firebase from 'firebase';
import _ from 'lodash';

class SavedResults extends Component {
  static navigationOptions = {
    title: "Saved Results"
  };

  state={
    results: [],
    tempResult: null,
    timePassed: false
  }

  readDataFirebase = () => {
    var userId = firebase.auth().currentUser.uid;
    var that = this;
    firebase.database().ref("users/" + userId+ "/tests").on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        var newVar = {
          hiv: childData.hiv,
          syphilis: childData.syphilis,
          date: childData.date,
          id: childData.id,
          key: childSnapshot.key,
          display: childData.display
        };
        that.setState(prevState => {
          return {
            results: prevState.results.concat(newVar)
          };
        });

      });
    });
  }

  componentWillMount() {
    this.readDataFirebase();
  }

  deleteAlert = (result) => {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete this result? They cannot be restored upon deletion.',
      [
        {text: 'OK', onPress: () => this.deleteFromDatabase(result)},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  }

  deleteFromDatabase = (result) => {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref("users/" + userId+ "/tests/"+result.key).update({ display: false});
    this.setState({ results: _.without(this.state.results, result)})
    // console.log("Results");
    // console.log(this.state.results);
  }

  componentDidMount() {
    setTimeout( () => {
      this.setTimePassed();
    },3000);
  }

  setTimePassed() {
    this.setState({ timePassed: true});
  }

  showReslts =() => {
    var tempResults = this.state.results.reverse();
    console.log("Pre-Result");
    console.log(this.state.results);
    return Object.keys(tempResults).map((obj, i) => {
      if(tempResults[obj].display == true){
        return (
          <View>
            <Card>
              <CardSection>
                  <CardText>Date: {tempResults[obj].date}</CardText>
                  <CardText>ID: {tempResults[obj].id}</CardText>
              </CardSection>
              <CardSection>
                <CardText>HIV: {tempResults[obj].hiv}</CardText>
                <CardText>SYPHILIS: {tempResults[obj].syphilis}</CardText>
              </CardSection>
              <CardSection>
                <GreenSmallButton onPress={() => this.toShare(this.state.results[obj])} >
                  Share
                </GreenSmallButton>
                <BlueSmallButton onPress={() => this.deleteAlert(this.state.results[obj])} >
                  Delete
                </BlueSmallButton>
              </CardSection>
            </Card>
          </View>
        )
      }
    });
  }

  toShare = (result) => {
    var newVar = {
      hiv: result.hiv,
      syphilis: result.syphilis,
      date: result.date,
      id: result.id
    }
    this.props.navigation.navigate("Share", {newVar})
  }

  render() {
    if (!this.state.timePassed) {
      return (
        <Box>
          <ScrollView>
            <TitleText>Results</TitleText>
            <Spinner color={"blue"} />
          </ScrollView>
        </Box>
      )
    }
    else {
      if(global.userSelection === 1){
        return(
          <Box>
            <TitleText>Results</TitleText>
            <ErrorText />
            <ErrorText>No Results are shown in this mode.</ErrorText>
            <ErrorText />
          </Box>
        )
      }
      return(
        <Box>
          <ScrollView>
            <TitleText>Results</TitleText>
            {this.showReslts()}
          </ScrollView>
        </Box>
      )
    }
  }
}

export { SavedResults };
