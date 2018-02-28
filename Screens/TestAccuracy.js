import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class TestAccuracy extends Component {
   static navigationOptions = {
    title: 'Test Accuracy',
  };
render() {
    return (
      <View>

<Text></Text>

    <Text> The Insti Multiplex is extremely </Text>
      <Text> accurate when performed correctly  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Text>It has been shown to have a sensitivity of   </Text>
        <Text>99.6% and a specificity of 99.3% for the   </Text>
        <Text> detection  of HIV-1 and HIV-2 antibodies in  </Text>
        <Text> finger-stick samples, and a 100% </Text>
        <Text>Sensitivity and specificity for the detection  </Text>
        <Text>  of secondary Syphillis</Text>

              <Text>  </Text>
                <Text>  </Text>

      <Button onPress= {() => this.props.navigation.navigate ('Resources')}
        title="Back"/>


        </View>
                  );
                }
              }

          export default TestAccuracy;
