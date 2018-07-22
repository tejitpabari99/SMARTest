import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Picker
} from "react-native";
import {
  Container,
  Content,
  Header,
  Button,
  Label,
  Form,
  Item,
  Input,
  Spinner
} from "native-base";

import {ShowPlaces} from './Components';

const placesDict = {
  "10001": ["ChIJVVVl075ZwokRpvtKYbQc6tg"],
  "10012": ["ChIJ-StxaYVZwokReNieCTSiikM"],
  "10013": ["ChIJFTmhv4pZwokR_uYOE0TCszw"],
  "10025": ["ChIJiQShcif2wokRQQRrB2lSeOo", "ChIJMW1m9Cb2wokRqDvmPD5aZ-E"],
  "10027": [
    "ChIJFcZ5B232wokRn4a4I8LGZBY",
    "ChIJgZb6qRT2wokR39IWC6810YM",
    "ChIJg2hS1Wv2wokRkV_8BhGLS_w"
  ],
  "10036": ["ChIJ0b298FFYwokRvKUgU-N9wmg"],
  "10037": ["ChIJB0DOFXb2wokRbOok6yj3m9U"],
  "10451": ["ChIJIzEi-cr1wokRgkIMokJ9ZGg"],
  "10453": ["ChIJ-19PGHf0wokRVp9eHbM0M4s", "ChIJHd3S8nL0wokRRXEvHb0l1Lk"],
  "10454": ["ChIJSVbez8H1wokRCx9tkKujG1o", "ChIJPwm-fUX0wokR6THpdQLDj1k"],
  "10466": ["ChIJG0k4eSjzwokRVhNK4-x_EYQ"],
  "11101": ["ChIJx0Xs7ChZwokRmSt-i2c7PrQ"],
  "11106": ["ChIJD3rARs1YwokRXC-U-Ddvf6A"],
  "11372": ["ChIJ72wvCLxfwokRavAzxB6RAPc"],
  "11432": ["ChIJjQZhUdlgwokRQ8TBWT-A-9w", "ChIJd1Uov95gwokRM3Ic06GilBM"],
  "11435": ["ChIJU_wj29FgwokROi-TEQajQgI"],
  "11201": ["ChIJpZphPElawokRUt_y4K0k_Lg", "ChIJ0Uu_ubRbwokReMj_uBU19NY"],
  "11213": ["ChIJyd9bpoBbwokReS29s6WrADM"],
  "11220": ["ChIJTWjMKqxawokR2UXmaZ6inJE"]
};

class NearbyClinics extends Component {
  static navigationOptions = {
    title: "Share"
  };
  state = {
    zip: "",
    onclick: 0,
    places: []
  };

  checkplace = () => {
    this.setState({ places: []})
    for (var key in placesDict) {
      var that = this;
      if (key === this.state.zip) {
        for (i = 0; i < placesDict[key].length; i++) {
          fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?placeid=${
              placesDict[key][i]
            }&key=AIzaSyDApS4dQS3R1uY2dGa9F4RjoouES2h2O18&fields=formatted_address,formatted_phone_number,geometry,name,opening_hours,website`
          )
            .then(function(response) {
              return response.json();
            })
            .then(function(myjson) {
              var openNowTemp;
              if (myjson.result.opening_hours.open_now === false) {
                openNowTemp = "No";
              } else {
                openNowTemp = "Yes";
              }
              var newVar = {
                name: myjson.result.name,
                address: myjson.result.formatted_address,
                website: myjson.result.website,
                number: myjson.result.formatted_phone_number,
                openNow: openNowTemp,
                openM: myjson.result.opening_hours.weekday_text[0],
                openT: myjson.result.opening_hours.weekday_text[1],
                openW: myjson.result.opening_hours.weekday_text[2],
                openTh: myjson.result.opening_hours.weekday_text[3],
                openF: myjson.result.opening_hours.weekday_text[4],
                openSa: myjson.result.opening_hours.weekday_text[5],
                openS: myjson.result.opening_hours.weekday_text[6],
              };

              that.setState(prevState => {
                return {
                  places: prevState.places.concat(newVar)
                };
              });

            })
            .catch(function(error) {
              console.log(error);
            });
        }
      }
    }

  };

  renderDropDown() {
    return (
      <Picker
        selectedValue={this.state.zip}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ zip: itemValue})
        }
      >
        <Picker.Item label="10001" value="10001" />
        <Picker.Item label="10012" value="10012" />
        <Picker.Item label="10013" value="10013" />
        <Picker.Item label="10025" value="10025" />
        <Picker.Item label="10027" value="10027" />
        <Picker.Item label="10036" value="10036" />
        <Picker.Item label="10037" value="10037" />
        <Picker.Item label="10451" value="10451" />
        <Picker.Item label="10453" value="10453" />
        <Picker.Item label="10454" value="10454" />
        <Picker.Item label="10466" value="10466" />
        <Picker.Item label="11101" value="11101" />
        <Picker.Item label="11106" value="11106" />
        <Picker.Item label="11372" value="11372" />
        <Picker.Item label="11432" value="11432" />
        <Picker.Item label="11435" value="11435" />
        <Picker.Item label="11201" value="11201" />
        <Picker.Item label="11213" value="11213" />
        <Picker.Item label="11220" value="11220" />
      </Picker>
    );
  }

  renderButton() {
    if (this.state.isLoading) {
      return <Spinner color={"red"} />;
    }
    return (
      <View>
        <TouchableOpacity>
          <Button
            style={{ marginTop: 20 }}
            full
            rounded
            success
            onPress={() => this.checkplace()}
          >
            <Text>Search Clinics</Text>
          </Button>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <View>{this.renderDropDown()}</View>
        <View>{this.renderButton()}</View>
        <ScrollView>
        console.log(this.state.places)
          <ShowPlaces placesArray={this.state.places} />
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export { NearbyClinics };
