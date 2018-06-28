import React, { Component } from 'react';
import { StyleSheet ,Text, View, ImageBackground,Button,Image} from 'react-native';





 class HomeScreen extends Component {
   static navigationOptions = {
    title: 'Welcome',
  };
  render() {

    return(
      <ImageBackground
      source={require('../app/images/greyBG.jpg')}
        style={styles.container}>



              <Text>                                  Welcome to SmartTest! </Text>
              <Text>           SmartTest is a companion app to rapid HIV </Text>
              <Text>                               and syphillis tests. </Text>
                  <Text>  </Text>
              <Text>            SmartTest will walk you through the testing </Text>
              <Text>               process, interpret your result and provide  </Text>
              <Text>                          resources for the next steps. </Text>
              <Text>  </Text>
                <Text>  </Text>
                  <Text>  </Text>
              <Button onPress= {() => this.props.navigation.navigate ('TestSelection')}
                title="Get Started"/>





              </ImageBackground>
          );
        }
      }
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          width: '100%',
          height: '100%',
        },
      });



  export default HomeScreen;
