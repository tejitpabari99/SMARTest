import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class GuestInstructions10 extends Component {
   static navigationOptions = {
    title: 'Simple Transfer',
  };
  render() {
    return (
      <View>
        <Text>                    Recap solution tube #1 and mix    </Text>
          <Text>                         contents by inverting several times.</Text>
            <Text>                         </Text>
              <Text>                          </Text>
                <Image source={       require('../Images/11A.png')}   style={{width: 193, height: 110}} />

                <Text>   pour the contents to the center              </Text>
                <Text>             of the  test membrane.   </Text>
                  <Text>                          </Text>
                    <Image source={       require('../Images/11B.png')}   style={{width: 193, height: 110}} />







      <Button onPress= {() => this.props.navigation.navigate ('GuestInstructions11')}
        title="Next"/>
</View>
          );
        }
      }

  export default GuestInstructions10;
