import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class WindowPeriod extends Component {
   static navigationOptions = {
    title: 'Window Period ',
  };
render() {
    return (
      <View>



    <Text> Window Period </Text>
      <Text> You may test positive with INSTI  </Text>
        <Text>Multiplex in as little as 21-22 days after  </Text>
        <Text> Infection; however, it can take as long as 3  </Text>
        <Text>months after infection to produce a   </Text>
        <Text>Positive Result.   </Text>
        <Text></Text>
          <Text></Text>
            <Text></Text>
        <Text> The average incubation period for syphillis   </Text>
        <Text> is 3 to 6 weeks, and 25 days to 2 months  </Text>
        <Text>for HIV. If you get tested before this time has elapsed, it is recommended that you   </Text>
        <Text>  of secondary Syphillis</Text>

              <Text>test again to confirm your results once the incubation period has passed   </Text>
                <Text>  </Text>
                  <Text>  </Text>

      <Button onPress= {() => this.props.navigation.navigate ('Resources')}
        title="Back"/>


        </View>
                  );
                }
              }

          export default WindowPeriod;
