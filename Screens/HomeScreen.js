import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Image
} from "react-native";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome",
    headerLeft: null,
    headerRight: (
      <Button
        onPress={() => alert('Logged Out!\n(Actually this doesn\'t do anything right now.)')}
        title="Log Out"
      />
    ),
  };

  render() {
    return (
      <View
        style={styles.container}
      >
        <Text style={styles.title}> Welcome to SmartTest! </Text>
        <Image
          source={require("../Images/loginPic.jpg")}
          style={{ width: 380, height: 200, marginBottom:15 }}
        />
        <Text> SmartTest is a companion app to rapid HIV </Text>
        <Text> and syphillis tests. </Text>
        <Text> </Text>
        <Text> SmartTest will walk you through the testing </Text>
        <Text> process, interpret your result and provide </Text>
        <Text> resources for the next steps. </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Button
          onPress={() => this.props.navigation.navigate("NearbyClinics")}
          title="Get Started"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: 'center'
  },
  title: {
  	fontWeight: 'bold',
  	fontSize: 20,
  	marginBottom:15,
  	marginBottom:10
  }
});

export { HomeScreen };
