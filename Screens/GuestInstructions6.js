import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class GuestInstructions6 extends Component {
   static navigationOptions = {
    title: 'Sterilize Finger',
  };
  render() {
    return (
      <View>
        <Text>                     Pick up alcohol swab   </Text>
          <Image source={       require('../Images/alcohol.jpg')}   style={{width: 193, height: 110}} />
        <Text>                       </Text>
          <Text>                          Wipe the tip of your finger  </Text>
          <Text>                               with the swab and let it dry   </Text>
            <Text>                                    completely.</Text>
          <Image source={       require('../Images/7B.png')}   style={{width: 193, height: 110}} />




      <Button onPress= {() => this.props.navigation.navigate ('GuestInstructions7')}
        title="Next"/>
</View>
          );
        }
      }

  export default GuestInstructions6;
