import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class Instructions15 extends Component {
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



      <Button onPress= {() => this.props.navigation.navigate ('Instructions14')}
        title="Previous Step"/>
         <Button onPress= {() => this.props.navigation.navigate ('Instructions16')}
            title="Continue"/>
</View>
          );
        }
      }

  export default Instructions15;
