import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class GuestResults extends Component {
   static navigationOptions = {
    title: 'Results',
  };
  render() {


    return (
      <View>



    <Text>GUEST ACCOUNT  </Text>
    <Text>Note: for full features and benefits, </Text>
    <Text>please create an account.</Text>


  <Text>                          RESULTS       </Text>





      <Button onPress= {() => this.props.navigation.navigate ('GuestResults')}
        title="Get Results"/>
         <Button onPress= {() => this.props.navigation.navigate ('')}
            title="Dial Hotline"/>
            <Button onPress= {() => this.props.navigation.navigate ('Resources')}
               title="Resources"/>
</View>
          );
        }
      }

  export default GuestResults;
