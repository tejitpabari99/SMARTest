import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class ResultsShare extends Component {
   static navigationOptions = {
    title: 'RESULTS',
  };
  render() {


    return (
      <View>



    <Text> </Text>
    <Text> Taken: December 12 , 2017 , 07:43 AM</Text>

    <Text> Test: INSTI HIV& SYPHYLIS</Text>

    <Text> Results : </Text>

    <Text> HIV :Positive</Text>
    <Text> Syphillis:Negative</Text>

      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>





      <Button onPress= {() => this.props.navigation.navigate ('HowToShare')}
        title="Share"/>
      <Text></Text>
      <Button onPress= {() => this.props.navigation.navigate ('DeletePage')}
        title="DELETE"/>

</View>
          );
        }
      }

  export default ResultsShare;
