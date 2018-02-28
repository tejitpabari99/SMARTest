import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class Instructions2 extends Component {
   static navigationOptions = {
    title: 'Prepare Lancet',
  };
  render() {

    let pic = {
      uri: 'https://thumbs.dreamstime.com/z/diabetic-lancet-device-hand-27521824.jpg'
    }
    let secPic ={
                  uri: 'http://images.indianexpress.com/2016/11/diabetes-759.jpg'
    }
    return (
      <View>
      <Image source={pic} style={{width: 200, height: 200}}/>


    <Text>        PICK UP LANCET </Text>



      <Image source={secPic} style={{width: 200, height: 200}}/>
        <Text>  Twist and remove twist and remove protective yellow tab </Text>
          <Text>  Place lancet by for future uses. </Text>
      <Button onPress= {() => this.props.navigation.navigate ('Instructions')}
        title="Previous Step"/>
         <Button onPress= {() => this.props.navigation.navigate ('Instructions3')}
            title="Next Step"/>
</View>
          );
        }
      }

  export default Instructions2;
