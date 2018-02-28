import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class Instructions3 extends Component {
   static navigationOptions = {
    title: 'Prepare Test',
  };
  render() {

    let pic = {
      uri: 'http://biolytical.com/wp-content/uploads/2017/02/instiHIV_package_o.png'
    }
    let secPic ={
                  uri: 'https://smartsexresource.com/sites/default/files/PS%20reactive_1_0.jpg'
    }
    return (
      <View>
      <Image source={pic} style={{width: 200, height: 200}}/>


    <Text>        PICK UP MEMBRANE UNIT POUCH </Text>



      <Image source={secPic} style={{width: 200, height: 200}}/>
        <Text>  Tear open pouch an place membrane unit on a flat service </Text>
          <Text>  Orient it so the lip of the device faces you. </Text>

      <Button onPress= {() => this.props.navigation.navigate ('Instructions2')}
        title="Previous Step"/>
         <Button onPress= {() => this.props.navigation.navigate ('Instructions4')}
            title="Next Step"/>
</View>
          );
        }
      }

  export default Instructions3;
