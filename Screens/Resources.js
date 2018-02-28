import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class Resources extends Component {
   static navigationOptions = {
    title: 'Resources',
  };
render() {
    return (
      <View>



    <Text>  </Text>
      <Text>  </Text>
        <Text>  </Text>






      <Button onPress= {() => this.props.navigation.navigate ('TestAccuracy')}
        title="Test Accuracy"/>
         <Button onPress= {() => this.props.navigation.navigate ('WindowPeriod')}
            title="Window Period"/>
            <Button onPress= {() => this.props.navigation.navigate ('')}
               title="Window Period"/>
               <Button onPress= {() => this.props.navigation.navigate ('')}
                  title="HIV Syphillis Information"/>
                  <Button onPress= {() => this.props.navigation.navigate ('')}
                     title="Nearby Clinics"/>
                     <Button onPress= {() => this.props.navigation.navigate ('')}
                        title="Call Hotline"/>


</View>
          );
        }
      }

  export default Resources;
