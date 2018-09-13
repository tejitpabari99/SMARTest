import React, { Component } from "react";
import { TitleText, Box, GreenSmallButton, BlueSmallButton, TextBox, Card, CardSection, CardText, ErrorText } from "./Styles";
import {View, ScrollView} from 'react-native';
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
          key: childSnapshot.key
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

  deleteFromDatabase = (result) => {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref("users/" + userId+ "/tests").child(result.key).remove();
    this.setState({ results: _.without(this.state.results, result)})
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
    return Object.keys(tempResults).map((obj, i) => {
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
              <BlueSmallButton onPress={() => this.deleteFromDatabase(this.state.results[obj])} >
                Delete
              </BlueSmallButton>
            </CardSection>
          </Card>
        </View>
      )
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
