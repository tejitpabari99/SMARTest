import React, { Component } from "react";
import { Text, View, TextInput, Linking } from 'react-native';
import Autolink from 'react-native-autolink';
// import { Accordion } from "native-base";
import {TextBox} from '../Styles'

/*
var dataArray = [ ];
dataArray.concat()
  return (
      <View>
        <Accordion
          dataArray={dataArray}
          iconStyle={{ color: "green" }}
          expandedIconStyle={{ color: "red" }}
          headerStyle={{ backgroundColor: "#b7daf8" }}
          contentStyle={{ backgroundColor: "#ddecf8" }}
        />
      </View>
  )
*/
class ShowPlaces extends Component {
  render() {
    var places = this.props.placesArray;
    return Object.keys(places).map((obj, i) => {
      return (
        <View>
          <Text />
          <Text>{places[obj].name}</Text>
          <Text>{places[obj].address}</Text>
          <Text>

            <Text
              style={{ textDecorationLine: 'underline', color: '#1f22b3'}}
              onPress={() => Linking.openURL(places[obj].website)}>
              {places[obj].website}
            </Text>
          </Text>
          <Text>
            <Autolink
              text=  {places[obj].number}
              phone = "tel:{places[obj].number}"
            />
          </Text>
          <Text>OpenNow: {places[obj].openNow}</Text>
          <Text>Open Timings: </Text>
          <Text>      {places[obj].openM}</Text>
          <Text>      {places[obj].openW}</Text>
          <Text>      {places[obj].openTh}</Text>
          <Text>      {places[obj].openF}</Text>
          <Text>      {places[obj].openSa}</Text>
          <Text>      {places[obj].openS}</Text>
          <Text />
          <Text />
        </View>
      )
    })
  };
}

export { ShowPlaces };
