import React, { Component } from 'react';
import { StyleSheet ,Text, View, ImageBackground,Button,Image} from 'react-native';





 class GuestVideo extends Component {
   static navigationOptions = {
    title: 'Instructional Video',
  };

  render() {

    return(
          <View>
          <Text> First you will see a short instructional video </Text>
          <Text>     that provides an overview of the test.  </Text>

          <Text> then you will see step-by-step instructions </Text>
          <Text>             to run the test yourself.       </Text>
          <Button onPress= {() => this.props.navigation.navigate ('GuestInstructions')}
            title="NEXT"/>
            <Button onPress= {() => this.props.navigation.navigate ('')}
              title="SKIP TO STEP BY STEP INSTRUCTIONS"/>

<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>





            </View>
          );
        }
      }



  export default GuestVideo;
