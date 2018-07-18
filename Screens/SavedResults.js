import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Container } from "native-base";
import * as firebase from 'firebase';

import { ShowResults } from './Components';

class SavedResults extends Component {
  static navigationOptions = {
    title: "Results"
  };

  state={
    results: []
  }

  readDataFirebase = () => {
    var userId = firebase.auth().currentUser.uid;
    var that = this;
    firebase.database().ref("users/" + userId+ "/tests").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        that.setState(prevState => {
          return {
            results: prevState.results.concat(childData)
          };
        });

      });
    });
  }
  componentWillMount() {
    {this.readDataFirebase()}
  }

  render() {
    return (
      <Container style={styles.container}>
        <View>
          <Text>Result </Text>
          <Text />
          <ShowResults results={this.state.results}/>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export { SavedResults };
