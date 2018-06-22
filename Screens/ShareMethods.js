import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class ShareMethods extends Component {
   static navigationOptions = {
    title: 'Share Method',
  };
  render() {


    return (
      <View>



    <Text>         Select a Method to Share Results:                           </Text>


    <Text><    /Text>
      <Text></Text>
        <Text></Text>





      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button onPress= {() => this.props.navigation.navigate ('TextMessage')}
        title="Text Message"/>
      <Text></Text>
      <Button onPress= {() => this.props.navigation.navigate ('Email')}
        title="Email Link"/>






</View>
          );
        }
      }

  export default ShareMethods;
