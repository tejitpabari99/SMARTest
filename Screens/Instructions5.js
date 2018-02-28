import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class Instructions5 extends Component {
   static navigationOptions = {
    title: 'Sterilize Finger',
  };
  render() {

    let pic = {
      uri: 'http://c8.alamy.com/comp/B2MEW9/diabetic-cleaning-finger-with-sterile-alcohol-swab-for-blood-test-B2MEW9.jpg'
    }
    return (
      <View>
      <Image source={pic} style={{width: 200, height: 200}}/>


    <Text>PICTURE OF VILE  </Text>




        <Text>  Tear open pouch an place membrane unit on a flat service </Text>
          <Text>  Orient it so the lip of the device faces you. </Text>

      <Button onPress= {() => this.props.navigation.navigate ('Instructions4')}
        title="Previous Step"/>
         <Button onPress= {() => this.props.navigation.navigate ('Instructions6')}
            title="Next Step"/>
</View>
          );
        }
      }

  export default Instructions5;
