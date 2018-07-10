import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';

import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';





 class GuestVideo extends Component {
   static navigationOptions = {
    title: 'Video PlaceHolder',
  };
  render() {
    return (

            <View>



				  <VideoPlayer
					videoProps={{
					  shouldPlay: true,
					  resizeMode: Video.RESIZE_MODE_CONTAIN,
					  source: {
						uri: '../Videos/InstiV2.mp4',
					  },
					}}
					isPortrait={true}
					playFromPositionMillis={0}

				  />

				  <Text></Text>
				  <Text></Text>
				  <Text></Text>
				  <Text></Text>
				  <Text></Text>
				  <Text></Text>
				  <Text></Text>
				  <Text></Text>
					  <Text></Text>
						  <Text></Text>
							  <Text></Text>
								  <Text></Text>
									  <Text></Text>

                      <Button onPress= {() => this.props.navigation.navigate ('GuestInstructions')}
                        title="Skip to step by step instructions"/>




            </View>
          );
        }
      }

  export default GuestVideo;
