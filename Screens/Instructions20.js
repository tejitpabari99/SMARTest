import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class Instructions19 extends Component {
   static navigationOptions = {
    title: 'Result Manager',
  };
  render() {

    let pic = {
      uri: 'http://image.made-in-china.com/2f0j00KChQFBeypjUA/Specimen-Jars-Specimen-Bottles-Specimen-Cup-Sterile-Specimen-Cup.jpg'
    }
    return (
      <View>
      <Image source={pic} style={{width: 200, height: 200}}/>


    <Text>PICTURE OF VILE  </Text>




        <Text>  Tear open pouch an place membrane unit on a flat service </Text>
          <Text>  Orient it so the lip of the device faces you. </Text>

      <Button onPress= {() => this.props.navigation.navigate ('Instructions18')}
        title="Previous Step"/>
         <Button onPress= {() => this.props.navigation.navigate ('Instructions20')}
            title="Next Step"/>
</View>
          );
        }
      }

  export default Instructions19;
