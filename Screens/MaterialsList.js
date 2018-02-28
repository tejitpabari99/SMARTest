import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class MaterialsList extends Component {
   static navigationOptions = {
    title: 'Materials',
  };
  render() {
    let pic = {
    uri: 'http://biolytical.com/wp-content/uploads/2017/02/insti_package_kit.jpg'
  };

    return (

            <View>

                                                  <Text> THIS IS A PLACEHOLDER FOR THE VIDEO</Text>
                                                  <Image source={pic} style={{width: 300, height: 350}}/>
                                                  <Text></Text>
                                                  <Text></Text>
                                                  <Text></Text>
                                                  <Text></Text>
                                                  <Text></Text>
                                                  <Text></Text>
                                                  <Text></Text>
                                                  <Text></Text>

                      <Button onPress= {() => this.props.navigation.navigate ('Instructions')}
                        title="Next"/>




            </View>
          );
        }
      }

  export default MaterialsList;
