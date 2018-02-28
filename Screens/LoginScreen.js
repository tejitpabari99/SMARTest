import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button} from 'react-native';





 class LoginScreen extends Component {
   static navigationOptions = {
   title: 'Login',
  };
  render() {
    return (

            <View>




       <Text style={styles.bigblue}>                Welcome to SmartTest!</Text>
       <Text style={styles.bigblue}>Please Login below with your correct credentials</Text>

              <Button onPress= {() => this.props.navigation.navigate ('HomeScreen')}
                title="User Login"/>
                <Button onPress= {() => this.props.navigation.navigate ('GuestTestSelection')}
                  title="Guest Login"/>
            </View>
          );
        }
      }
      const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },

  red: {
    color: 'red',
  },
});

  export default LoginScreen;





/*
import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button} from 'react-native';





 class LoginScreen extends Component {
  render() {
    return (

            <View>


              <Text> This is Michael Okrah Login Screen </Text>
              <Button onPress= {() => this.props.navigation.navigate ('HomeScreen')}
                title="Go to homescreen"/>
            </View>
          );
        }
      }

  export default LoginScreen;




*/
