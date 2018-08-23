import React, { Component } from 'react';
import { StyleSheet ,Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import * as firebase from "firebase";
import {Button} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";

import './Global/global.js'

import { SplashScreen, LoginScreen, SignupScreen, ForgotPassword,
  HomeScreen, TestSelection, TestSetup,
  VideoInfo, VideoPlayer2, Instructions, Instructions2, Instructions3, Instructions4, Instructions5, Instructions6, Instructions7, Instructions8, Instructions9, Instructions10, Instructions11, Instructions12,
  TakePicture, GuestTakePicture, Results, GuestResults, SavedResults,
  Resources, TestAccuracy, WindowPeriod, Share, NearbyClinics, DiseasesInfo, NewLancetAddition,BlueLancet
} from './Screens';

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
  // SplashScreen : {screen : SplashScreen},
  LoginScreen : {screen : LoginScreen},
  SignupScreen : {screen : SignupScreen},
  ForgotPassword : {screen : ForgotPassword},
  HomeScreen : {screen: HomeScreen},
  TestSelection : {screen : TestSelection},
  TestSetup : {screen : TestSetup},
  VideoInfo : {screen : VideoInfo},
  VideoPlayer2 : {screen : VideoPlayer2},
  Instructions : {screen : Instructions},
  Instructions2 : {screen : Instructions2},
  Instructions3 : {screen : Instructions3},
  Instructions4 : {screen : Instructions4},
  Instructions5 : {screen : Instructions5},
  Instructions6 : {screen : Instructions6},
  Instructions7 : {screen : Instructions7},
  Instructions8: {screen : Instructions8},
  Instructions9: {screen : Instructions9},
  Instructions10: {screen : Instructions10},
  Instructions11: {screen : Instructions11},
  Instructions12: {screen : Instructions12},
  TakePicture: {screen : TakePicture},
  GuestTakePicture: {screen : GuestTakePicture},
  Results: {screen : Results},
  GuestResults: {screen : GuestResults},
  SavedResults: {screen : SavedResults},
  Resources: {screen : Resources},
  TestAccuracy: {screen : TestAccuracy},
  WindowPeriod: {screen : WindowPeriod},
  Share: {screen : Share},
  NearbyClinics: {screen : NearbyClinics},
  DiseasesInfo: {screen : DiseasesInfo},
  NewLancetAddition: {screen :NewLancetAddition},
  BlueLancet:{ screen:  BlueLancet}
},
{
  navigationOptions: ({ navigation}) => ({
    headerBackTitle: 'Back',
    headerRight: (
      <Button
        onPress={() => firebase.auth().signOut()
          .then(function() {
            navigation.navigate('LoginScreen');
          })
          .catch((error) => {
            console.log(error);
          })
        }
        title="Signout"
      />
    ),
  })
});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#00FFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
