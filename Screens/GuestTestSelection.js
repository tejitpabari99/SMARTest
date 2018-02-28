import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class GuestTestSelection extends Component {
   static navigationOptions = {
    title: 'Guest Test Select',
  };
  render() {

    let pic = {
      uri: 'http://biolytical.com/wp-content/uploads/2017/02/multi_package_o.png'
    };
    return (
      <View>
        <Text>Select a test to take below :  </Text>
          <Text>  </Text>
            <Text>  </Text>
      <Image source={pic} style={{width: 200, height: 200}}/>
      <Button onPress= {() => this.props.navigation.navigate ('GuestVideo')}
        title="INSTI HIV & SYPHILLIS TEST"/>
</View>
          );
        }
      }

  export default GuestTestSelection;
