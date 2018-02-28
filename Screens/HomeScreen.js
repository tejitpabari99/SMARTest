import React, { Component } from 'react';
import { StyleSheet ,Text, View, ImageBackground,Button,Image} from 'react-native';





 class HomeScreen extends Component {
   static navigationOptions = {
    title: 'Welcome',
  };
  render() {

    return(
          <View>

  <Text>This whole area is a placeholder for user information.  </Text>
  <Text>  </Text>
    <Text>  </Text>
      <Text>  </Text>
  <Text>  </Text>
    <Text>  </Text>
      <Text>  </Text>
              <Text>                          Welcome to SmartTest! </Text>
              <Text>      SmartTest is a companion app to rapid HIV </Text>
              <Text>                           and syphillis tests. </Text>
                  <Text>  </Text>
              <Text>            SmartTest will walk you through the testing </Text>
              <Text>               process, interpret your result and provide  </Text>
              <Text>                          resources for the next steps. </Text>
              <Text>  </Text>
                <Text>  </Text>
                  <Text>  </Text>
              <Button onPress= {() => this.props.navigation.navigate ('TestSelection')}
                title="Get Started"/>





            </View>
          );
        }
      }



  export default HomeScreen;


/*
import React, { Component } from 'react';
import { StyleSheet ,Text, View, ImageBackground} from 'react-native';





 class HomeScreen extends Component {
  render() {
    return(
          <View>
              <Text> This is the home Screen </Text>
            </View>
          );
        }
      }



  export default HomeScreen;

*/
