import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';

class GuestTakePicture extends Component {
   static navigationOptions = {
    title: 'Guest Take Picture',
  };

  checkUserSelection = () => {
    if (global.userSelection === 2) {
      return (
        <Button onPress= {() => this.props.navigation.navigate ('Results')}
          title="Results"/>
      );
    }
    else {
      return (
        <Button onPress= {() => this.props.navigation.navigate ('GuestResults')}
          title="Results"/>
      );

    }
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
        {this.checkUserSelection()}

      </View>
    );
  }
}

export { GuestTakePicture };
