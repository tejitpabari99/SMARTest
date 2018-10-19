import React from "react";
import {
  Container
} from "native-base";
import {ScrollView, View} from 'react-native';
const Box = ({children}) => {
  return(
      <ScrollView
        style={{
          flex: 2,
          backgroundColor: "#ffffff",
          padding: 15,
          justifyContent: "flex-start",
          // position: 'relative'
        }}
      >
      {children}
      </ScrollView>
  );
};

export {Box};
