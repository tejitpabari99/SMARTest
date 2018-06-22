import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class Instructions6 extends Component {
   static navigationOptions = {
    title: 'Sterilize Finger',
  };
  render() {
    return (
      <View>
        <Text>                          Pick up alcohol swab   </Text>
          <Image source={       require('../Images/alcohol.jpg')}   style={{width: 370, height: 250}} />
        <Text>                       </Text>
          <Text>                          Wipe the tip of your finger  </Text>
          <Text>                           with the swab and let it dry   </Text>
            <Text>                                    completely.</Text>
          <Image source={       require('../Images/7B.png')}   style={{width: 370, height: 250}} />




      <Button onPress= {() => this.props.navigation.navigate ('Instructions7')}
        title="Next"/>
</View>
          );
        }
      }

  export default Instructions6;
