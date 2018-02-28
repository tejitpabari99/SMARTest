import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class Instructions10 extends Component {
   static navigationOptions = {
    title: 'INFO',
  };
  render() {


    return (
      <View>



    <Text>The next page will display your ISTI HIV & Syphillis test result.  </Text>




      <Button onPress= {() => this.props.navigation.navigate ('GuestResults')}
        title="Get Results"/>
         <Button onPress= {() => this.props.navigation.navigate ('')}
            title="Dial Hotline"/>
</View>
          );
        }
      }

  export default Instructions10;
