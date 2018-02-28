import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class Instructions17 extends Component {
   static navigationOptions = {
    title: 'Result Page',
  };
  render() {


    return (
      <View>



    <Text>THIS WHOLE PAGE WILL BE THE RESULT PAGE </Text>





      <Button onPress= {() => this.props.navigation.navigate ('Instructions16')}
        title="Save"/>
         <Button onPress= {() => this.props.navigation.navigate ('')}
            title="Delete"/>

            <Button onPress= {() => this.props.navigation.navigate ('')}
               title="Dial Hotline"/>
</View>
          );
        }
      }

  export default Instructions17;
