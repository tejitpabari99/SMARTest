import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';

class ScanResults extends Component {
   static navigationOptions = {
    title: 'Scan Results',
  };
  render() {
    return (
      <View>
        <Text>                    Please align the edges of the test to       </Text>
        <Text>                      the center of the square below:           </Text>
        <Text>                                                                </Text>
        <Text>                    _________________________________           </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>

        <Text>                    __________________________________          </Text>
        <Text>                                                                </Text>
        <Text>                                                                </Text>
        <Button onPress= {() => this.props.navigation.navigate ('ScanResults')}
          title="Retake"/>

  <Button onPress= {() => this.props.navigation.navigate ('PreResults')}
    title="Continue"/>
</View>



          );
        }
      }

  export default ScanResults;
