import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class GuestInstructions2 extends Component {
   static navigationOptions = {
    title: 'Prepare Gauze',
  };
  render() {
    return (
      <View>
        <Text>                     PICK UP GAUZE PACKET </Text>
          <Text>  </Text>
            <Text>  </Text>
            <Text></Text>
            <Text></Text>
          <Image source={       require('../Images/2.png')}   style={{width: 193, height: 110}} />
                            <Text>Open Gauze packet and place </Text>
                              <Text> it nearby for future uses</Text>
                              <Text></Text>

      <Button onPress= {() => this.props.navigation.navigate ('GuestInstructions3')}
        title="Next"/>
</View>
          );
        }
      }

  export default GuestInstructions2;
