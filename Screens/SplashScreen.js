import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {Spinner, Container} from 'native-base';

class SplashScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        timePassed: false,
    };
  }

  componentDidMount() {
    setTimeout( () => {
      this.setTimePassed();
    },1000);
  }

  setTimePassed() {
    this.setState({timePassed: true});
  }

  render() {
    if (!this.state.timePassed) {
      return (
        <Container style={styles.container}>
          <Image
            source={require("../Images/SMARTest.png")}
            style={{ alignSelf: 'center', marginBottom:35 }}
          />
          <Spinner color={"red"} />
        </Container>

      )
    }
    else {
      return this.props.navigation.navigate("LoginScreen");
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
  }
});
export {SplashScreen}
