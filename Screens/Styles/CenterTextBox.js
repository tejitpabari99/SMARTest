import React from "react";
import {
  Text
} from "react-native";

const CenterTextBox = ({children}) => {
  return(
    <Text
      style={{
      	fontSize: 18,
        includeFontPadding: true,
        color: "#000000",
        alignSelf: 'center',
        textAlign: 'center'
      }}
    >
      {children}
    </Text>
  );
};

export {CenterTextBox};
