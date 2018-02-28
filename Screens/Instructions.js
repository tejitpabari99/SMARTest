import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class Instructions extends Component {
   static navigationOptions = {
    title: 'Instructions',
  };
  render() {

    let pic = {
      uri: 'https://cdn.medisave.co.uk/media/catalog/product/cache/1/image/1024x/9df78eab33525d08d6e5fb8d27136e95/r/b/rb5885_open.jpg'
    }
    let secPic ={
                  uri: 'https://images-na.ssl-images-amazon.com/images/I/51hrQDRqSHL.jpg'
    }
    return (
      <View>
      <Image source={pic} style={{width: 200, height: 200}}/>


    <Text>        PICK UP GAUZE PACKET </Text>



      <Image source={secPic} style={{width: 200, height: 200}}/>
        <Text>  Open gauze packet and leave nearby for future steps </Text>
      <Button onPress= {() => this.props.navigation.navigate ('MaterialsList')}
        title="Previous Step"/>
         <Button onPress= {() => this.props.navigation.navigate ('Instructions2')}
            title="Next Step"/>
</View>
          );
        }
      }

  export default Instructions;
