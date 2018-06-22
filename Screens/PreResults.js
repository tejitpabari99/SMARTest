import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class PreResults extends Component {
   static navigationOptions = {
    title: 'INFO',
  };
  render() {


    return (
      <View>



    <Text>The next page will display your ISTI HIV & Syphillis test   </Text>
    <Text>                                              result.  </Text>




      <Button onPress= {() => this.props.navigation.navigate ('ResultsPage')}
        title="Get Results"/>
      <Text></Text>
      <Text></Text>
      <Text></Text>
         <Button onPress= {() => this.props.navigation.navigate ('PreResults')}
            title="Dial Hotline"/>
</View>
          );
        }
      }

  export default PreResults;
