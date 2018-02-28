import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class GuestScanResults extends Component {
   static navigationOptions = {
    title: 'Scan Results',
  };
  render() {

    return (
      <View>


    <Text>Please Align the edges of the test to  </Text>
    <Text>     the center of the square below:  </Text>

      <Text>   ----------------------------  </Text>
      <Text>   |                                            |  </Text>
        <Text>   |                                            |  </Text>
            <Text>   |                                            |  </Text>
                <Text>   |                                            |  </Text>
                    <Text>   |                                            |  </Text>
                        <Text>   |                                            |  </Text>
                            <Text>   |                                            |  </Text>
                                <Text>   |                                            |  </Text>
                                    <Text>   |                                            |  </Text>


      <Text>   ----------------------------  </Text>



      <Button onPress= {() => this.props.navigation.navigate ('Instructions11')}
        title="Previous Step"/>
         <Button onPress= {() => this.props.navigation.navigate ('')}
            title="Continue"/>
</View>
          );
        }
      }

  export default GuestScanResults;
