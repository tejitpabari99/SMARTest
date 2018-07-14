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

class Results extends Component {
  static navigationOptions = {
    title: "RESULTS"
  };
  state = {
    status: ''
  }

  saveResult = () => {
    this.setState({ status: 'Your Results have been saved'});
    //save Result code
  }

  deleteResult = () => {
    if(this.state.status === 'Your Results have been saved'){
      //retrive data from firebase and delete results.
    }
    this.setState({ status: 'Your Results have been deleted'});
  }


  render() {
    return (
      <Container>
        <View>
          <Text> Result </Text>
          <Text> </Text>

          <Text> </Text>

          <Text> </Text>

          <Text> </Text>

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
