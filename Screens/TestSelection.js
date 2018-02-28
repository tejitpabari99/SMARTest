import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class TestSelection extends Component {
   static navigationOptions = {
    title: 'Select Test',
  };
  render() {

    let pic = {
      uri: 'http://biolytical.com/wp-content/uploads/2017/02/multi_package_o.png'
    };
    return (
      <View>
        <Text>Select a test to take below :  </Text>
          <Text>  </Text>
            <Text>  </Text>
      <Image source={pic} style={{width: 200, height: 200}}/>
      <Button onPress= {() => this.props.navigation.navigate ('TestSetup')}
        title="INSTI HIV & SYPHILLIS TEST"/>
</View>
          );
        }
      }

  export default TestSelection;


/*

<View>


  <Text> Select a Test you would like to take: </Text>
    <Text> 1. Insti HIV & Syphilis Test </Text>
      <Text> 2. List Item </Text>
        <Text> 3. List Item </Text>

          <Text> Select a Test you would like to take </Text>
  <Button onPress= {() => this.props.navigation.navigate ('VideoInstructions')}
    title="Next Page"/>

</View>

*/
