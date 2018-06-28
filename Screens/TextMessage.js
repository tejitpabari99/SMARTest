import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class TextMessage extends Component {
   static navigationOptions = {
    title: 'Share by Text Message',
  };
  render() {


    return (
      <View>



    <Text>        Enter the phone number of the recieptient                        </Text>


    <Text><    /Text>
      <Text></Text>
        <Text></Text>





      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button onPress= {() => this.props.navigation.navigate ('LinkURL')}
        title="Send Results"/>
      <Text></Text>







</View>
          );
        }
      }

  export default TextMessage;
