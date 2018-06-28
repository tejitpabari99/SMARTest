import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class GuestInstructions4 extends Component {
   static navigationOptions = {
    title: 'Prepare Sample Collector',
  };
  render() {
    return (
      <View>
        <Text>                     PICK UP THE SOLUTION TUBE #1 WITH  </Text>
        <Text>                            THE RED CAP AND TWIST OPEN THE CAP. </Text>
          <Image source={       require('../Images/redVile.jpg')}   style={{width: 193, height: 110}} />
        <Text>                                  PLACE IT NEARBY FOR FUTURE STEPS</Text>
            <Text>                      </Text>
            <Text></Text>
                <Text></Text>
                    <Text>                BE CAREFULL NOT TO KNOCK IT OVER!</Text>



      <Button onPress= {() => this.props.navigation.navigate ('GuestInstructions5')}
        title="Next"/>
</View>
          );
        }
      }

  export default GuestInstructions4;
