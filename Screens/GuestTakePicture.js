import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';

class GuestTakePicture extends Component {
   static navigationOptions = {
    title: 'Take Picture',
  };
  render() {
    return (
      <View>
        <Text>                   Guest Take Picture      </Text>
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
        <Button onPress= {() => this.props.navigation.navigate ('GuestTakePicture')}
          title="Retake"/>
        <Button onPress= {() => this.props.navigation.navigate ('GuestResults')}
          title="Results"/>
      </View>
    );
  }
}

export { GuestTakePicture };
