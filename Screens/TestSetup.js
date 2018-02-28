import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,Video} from 'react-native';





 class TestSetup extends Component {
   static navigationOptions = {
    title: 'Share Test Results',
  };
  render() {
    return (

            <View>


              <Text> Select Testing mode :  </Text>


                      <Button onPress= {() => this.props.navigation.navigate ('Info')}
                        title="JUST ME "/>

                        <Button onPress= {() => this.props.navigation.navigate ('Info')}
                          title="JUST MY PARTNER "/>

                          <Button onPress= {() => this.props.navigation.navigate ('Info')}
                            title="DUO TEST "/>

                  <Text> NOTE:  </Text>
                <Text>Just My partner will lead to the guest account mode where results cannot be saved. </Text>
                <Text>  </Text>
                <Text> Duo Test Mode will enable simultaneous  </Text>
                  <Text> testing (e.g you and your partner), however the  </Text>
                    <Text> Partner s Results  cannot be saved.</Text>


            </View>
          );
        }
      }

  export default TestSetup;
