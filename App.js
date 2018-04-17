import React, { Component } from 'react';
import { StyleSheet ,Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';


import LoginScreen from './Screens/LoginScreen'
import SignupScreen from './Screens/SignupScreen'
import HomeScreen from './Screens/HomeScreen'
import TestSelection from './Screens/TestSelection'
import TestSetup from './Screens/TestSetup'
import Info from './Screens/Info'
//import DetailedSteps from './Screens/DetailedSteps'
import MaterialsList from './Screens/MaterialsList'
import Instructions from './Screens/Instructions'
import Instructions2 from './Screens/Instructions2'
import Instructions3 from './Screens/Instructions3'
import Instructions4 from './Screens/Instructions4'
import Instructions5 from './Screens/Instructions5'
import Instructions6 from './Screens/Instructions6'
import Instructions7 from './Screens/Instructions7'
import Instructions8 from './Screens/Instructions8'
import Instructions9 from './Screens/Instructions9'
import Instructions10 from './Screens/Instructions10'
import Instructions11 from './Screens/Instructions11'
import Instructions12 from './Screens/Instructions12'
import Instructions13 from './Screens/Instructions13'
import Instructions14 from './Screens/Instructions14'
import Instructions15 from './Screens/Instructions15'
import Instructions16 from './Screens/Instructions16'
import Instructions17 from './Screens/Instructions17'
import Instructions18 from './Screens/Instructions18'
import Instructions19 from './Screens/Instructions19'
import Instructions20 from './Screens/Instructions20'
import Resources from './Screens/Resources'
import TestAccuracy from  './Screens/TestAccuracy'
import WindowPeriod from  './Screens/WindowPeriod'
import GuestTestSelection from  './Screens/GuestTestSelection'
import GuestVideo from  './Screens/GuestVideo'
import GuestInstructions from './Screens/GuestInstructions'
import GuestInstructions2 from './Screens/GuestInstructions2'
import GuestInstructions3 from './Screens/GuestInstructions3'
import GuestInstructions4 from './Screens/GuestInstructions4'
import GuestInstructions5 from './Screens/GuestInstructions5'
import GuestInstructions6 from './Screens/GuestInstructions6'
import GuestInstructions7 from './Screens/GuestInstructions7'
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUKMFNY68L-7Y2LRbsO0e6olex-xnzWrk",
    authDomain: "smartest-df9af.firebaseapp.com",
    databaseURL: "https://smartest-df9af.firebaseio.com",
    projectId: "smartest-df9af",
    storageBucket: "smartest-df9af.appspot.com",
    messagingSenderId: "782261463353"
};

firebase.initializeApp(firebaseConfig);


export default class App extends React.Component {

  render() {
    return(
           <AppNavigator />
          );
        }
      }

  const AppNavigator = StackNavigator({
    LoginScreen : {screen : LoginScreen},
      SignupScreen: {screen : SignupScreen},
    HomeScreen: {screen: HomeScreen },
    TestSelection : {screen: TestSelection },
    TestSetup: {screen: TestSetup },
    Info: {screen: Info },
  //  DetailedSteps: {screen: DetailedSteps},
    MaterialsList: {screen: MaterialsList },
    Instructions:{screen:Instructions},
    Instructions2:{screen:Instructions2},
    Instructions3:{screen:Instructions3},
    Instructions4:{screen:Instructions4},
    Instructions5:{screen:Instructions5},
    Instructions6:{screen:Instructions6},
    Instructions7:{screen:Instructions7},
    Instructions8:{screen:Instructions8},
      Instructions9:{screen:Instructions9},
        Instructions10:{screen:Instructions10},
          Instructions11:{screen:Instructions11},
            Instructions12:{screen:Instructions12},
              Instructions13:{screen:Instructions13},
                Instructions14:{screen:Instructions14},
                  Instructions15:{screen:Instructions15},
                    Instructions16:{screen:Instructions16},
                      Instructions17:{screen:Instructions17},
                        Instructions18:{screen:Instructions18},
                          Instructions19:{screen:Instructions19},
                            Instructions20:{screen:Instructions20},
                             Resources:{screen:Resources},
                            WindowPeriod:{screen:WindowPeriod},
                             TestAccuracy:{screen:TestAccuracy},
                                      GuestTestSelection:{screen:GuestTestSelection},
                                      GuestVideo:{screen:GuestVideo},
                                      GuestInstructions:{screen:GuestInstructions},
                                        GuestInstructions2:{screen:GuestInstructions2},
                                          GuestInstructions3:{screen:GuestInstructions3},
                                            GuestInstructions4:{screen:GuestInstructions4},
                                              GuestInstructions5:{screen:GuestInstructions5},
                                                GuestInstructions6:{screen:GuestInstructions6},
                                                  GuestInstructions7:{screen:GuestInstructions7}

  })
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#00FFFF',
      alignItems: 'center',
      justifyContent: 'center',
  },
  });


/*
import React, { Component } from 'react';
import { StyleSheet ,Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation'


//import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'


export default class App extends React.Component {
  render() {
    return(
           <AppNavigator />
          );
        }
      }

  const AppNavigator = StackNavigator({
    //LoginScreen : {screen : LoginScreen},
    HomeScreen: {screen: HomeScreen }
  })

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });




*/
