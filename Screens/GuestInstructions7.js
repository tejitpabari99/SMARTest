import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class GuestInstructions7 extends Component {
   static navigationOptions = {
    title: 'Extract Blood',
  };
  render() {
    return (
      <View>
        <Text>                    PLace tip of lancet on the clean finger.   </Text>
          <Text>                        Firmly Push Down on the other end.   </Text>
          <Image source={       require('../Images/8A.png')}   style={{width: 275, height: 200}} />
        <Text>                       </Text>
          <Text>                       </Text>
          <Text>                          You will feel a momentary pinprick.  </Text>
          <Text>                               After discard lancet in trash   </Text>
            <Text>                                    completely.</Text>
          <Image source={       require('../Images/8B.png')}   style={{width: 193, height: 110}} />




      <Button onPress= {() => this.props.navigation.navigate ('GuestInstructions8')}
        title="Next"/>
</View>
          );
        }
      }

  export default GuestInstructions7;
