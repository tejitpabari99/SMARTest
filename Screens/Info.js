import React, { Component } from 'react';
import { StyleSheet ,Text, View, ImageBackground,Button,Image} from 'react-native';





 class Info extends Component {
   static navigationOptions = {
    title: 'Test Setup',
  };

  render() {

    return(
          <View>
          <Text> First you will see a short instructional video </Text>
          <Text>     that provides an overview of the test.  </Text>

          <Text> then you will see step-by-step instructions </Text>
          <Text>             to run the test yourself.       </Text>
          <Button onPress= {() => this.props.navigation.navigate ('MaterialsList')}
            title="NEXT"/>

<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>

    



            </View>
          );
        }
      }



  export default Info;


  /*


                <Text> PLease watch the video below before beginning to perform the INSTI HIV Test </Text>
                <Text>      process, interpret your result and provide  </Text>
                <Text>                resources for the next steps. </Text>
                <Button onPress= {() => this.props.navigation.navigate ('CaptureImage')}
                  title="Play Video"/>





                                  <Button onPress= {() => this.props.navigation.navigate ('CaptureImage')}
                                    title="Continue to test"/>



*/
