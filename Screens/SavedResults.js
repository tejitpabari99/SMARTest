import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, Button, Image, View } from "react-native";
import { Container } from "native-base";
import * as firebase from 'firebase';
import _ from 'lodash';

class SavedResults extends Component {
  static navigationOptions = {
    title: "Results"
  };

  state={
    results: [],
    tempResult: null
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

  showReslts =() => {
    var tempResults = this.state.results.reverse();
    return Object.keys(tempResults).map((obj, i) => {
      return (
        <View>
          <Text />
          <Text>HIV: {tempResults[obj].hiv}</Text>
          <Text>SYPHILIS: {tempResults[obj].syphilis}</Text>
          <Text>Date: {tempResults[obj].date}</Text>
          <Text>ID: {tempResults[obj].id}</Text>
          <Button
            onPress={() => this.deleteFromDatabase(this.state.results[obj])}
            title="Delete"
          />
          <Button
            onPress={() => this.toShare(this.state.results[obj])}
            title="Share"
          />
        </View>
      )
    })
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
    return(
      <Container style={styles.container}>
        <ScrollView>
          <Text>Results</Text>
          <Text/>
          {this.showReslts()}
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export { SavedResults };
