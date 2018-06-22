import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image, ScrollView} from 'react-native';





 class Instructions extends Component {
   static navigationOptions = {
    title: 'Material List',
  };
  render() {
    return (

            <ScrollView>

                                                  <Text>                                      INSTI MULTIPLEX </Text>
                                                  <Text>                                          KIT MATERIALS           </Text>

                                                  <Text></Text>
                                                  <Text></Text>
                                                <Image source={       require('../Images/membraneUnit.jpg')}   style={{width: 350, height: 200}} />
                                                                  <Text>                            Membrane Unit</Text>
                                                                    <Text></Text>
                                                                    <Text></Text>
                                                                      <Image source={require('../Images/5.jpg')}   style={{width: 350, height: 200}} />
                                                                      <Text>                           Solution 1 Vial</Text>
                                                                        <Text></Text>
                                                                          <Text></Text>
                                                                        <Image source={require('../Images/12A.jpg')}   style={{width: 350, height: 200}} />
                                                                        <Text>                          Solution 2 Vial</Text>
                                                                        <Text></Text>
                                                                          <Text></Text>
                                                                        <Image source={require('../Images/13A.jpg')}   style={{width: 350, height: 200}} />
                                                                        <Text>                          Solution 3 Vial</Text>
                                                                        <Text></Text>
                                                                          <Text></Text>
                                                                        <Image source={require('../Images/lancet.jpg')}   style={{width: 350, height: 200}} />
                                                                        <Text>                           Single use Lancet</Text>
                                                                        <Text></Text>
                                                                          <Text></Text>
                                                                        <Image source={require('../Images/alcohol.jpg')}   style={{width: 350, height: 200}} />
                                                                        <Text>                            Alcohol Swab</Text>
                                                                        <Text></Text>
                                                                          <Text></Text>
                                                                        <Image source={require('../Images/7A.jpg')}   style={{width: 350, height: 200}} />
                                                                        <Text>                            Gauze Pad </Text>
                                                                        <Text></Text>
                                                                          <Text></Text>
                                                                        <Image source={require('../Images/bandage.jpg')}   style={{width: 350, height: 200}} />
                                                                        <Text>                               Bandage </Text>

                      <Button onPress= {() => this.props.navigation.navigate ('Instructions2')}
                        title="Next"/>




          </ScrollView>
          );
        }
      }

  export default Instructions;
