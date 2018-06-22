import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class GuestInstructions8 extends Component {
   static navigationOptions = {
    title: 'Collect Blood',
  };
  render() {
    return (
      <View>
        <Text>                    Squeeze your finger to extrract blood.   </Text>
          <Text>                         </Text>
            <Text>                         </Text>
              <Text>                    Grab solution tube #1 and drop the       </Text>
              <Text>                            the blood directly into the tube. </Text>
                <Text>                       </Text>
          <Image source={       require('../Images/9.png')}   style={{width: 193, height: 110}} />
        <Text>                       </Text>
          <Text>                       </Text>
  <Text>                         </Text>
    <Text>                  MAKE SURE TO GET A FEW DROPS OF       </Text>
    <Text>                     BLOOD INTO THE TUBE.                 </Text>
<Text>                         </Text>





      <Button onPress= {() => this.props.navigation.navigate ('GuestInstructions9')}
        title="Next"/>
</View>
          );
        }
      }

  export default GuestInstructions8;
