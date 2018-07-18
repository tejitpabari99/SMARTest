import React, { Component } from "react";
import { Text, View, TextInput, Linking } from 'react-native';
import Autolink from 'react-native-autolink';

class ShowPlaces extends Component {
    render() {
        console.log('bb');
        var places = this.props.placesArray;
        var name, address, number, openM, openT, openW, openTh, openF, openSa, openS, openNow, placeNames, website;

        return Object.keys(places).map((obj, i) => {
            console.log();
            return (
                <View>
                    <Text />
                    <Text>Name: {places[obj].name}</Text>
                    <Text>Address: {places[obj].address}</Text>
                    <Text>
                      Website:
                      <Text
                        onPress={() => Linking.openURL(places[obj].website)}>
                        {' '}{places[obj].website}
                      </Text>
                    </Text>
                    <Text>
                      Phone Number:
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
