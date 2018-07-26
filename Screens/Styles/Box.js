import React from "react";
import {
  Container
} from "native-base";
import {ScrollView} from 'react-native';
const Box = ({children}) => {
  return(
      <Container
        style={{
          flex: 2,
          backgroundColor: "#ffffff",
          padding: 15,
          justifyContent: "flex-start",
          // position: 'relative'
        }}
      >
      <ScrollView> {children} </ScrollView>
      </Container>
  );
};

export {Box};
