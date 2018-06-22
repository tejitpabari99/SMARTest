import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class Instructions9 extends Component {
   static navigationOptions = {
    title: 'Bandaging Finger',
  };
  render() {
    return (
      <View>
        <Text>                    Wipe your finger with the gauze    </Text>
          <Text>                           and put on a bandage.</Text>
            <Text>                         </Text>
              <Text>                          </Text>
              <Text>                           </Text>
                <Text>                       </Text>
          <Image source={       require('../Images/10.png')}   style={{width: 370, height: 250}} />





      <Button onPress= {() => this.props.navigation.navigate ('Instructions10')}
        title="Next"/>
</View>
          );
        }
      }

  export default Instructions9;
