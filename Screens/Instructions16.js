import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class Instructions16 extends Component {

  render() {


    return (
      <View>



    <Text>The next page will display your  </Text>
      <Text>INSTI HIV & Syphillis test result.  </Text>




        <Text>  Tear open pouch an place membrane unit on a flat service </Text>
          <Text>  Orient it so the lip of the device faces you. </Text>

      <Button onPress= {() => this.props.navigation.navigate ('Instructions15')}
        title="Previous Step"/>
         <Button onPress= {() => this.props.navigation.navigate ('Instructions17')}
            title="Get Result"/>
</View>
          );
        }
      }

  export default Instructions16;
