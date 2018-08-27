import React from "react";
import {
  Text
} from "react-native";

const TextBox = ({children}) => {
  return(
    <Text
      style={{
      	fontSize: 15,
        includeFontPadding: true,
        color: "#000000",
        textAlign: 'center'
      }}
    >
      {children}
    </Text>
  );
};

export {TextBox};
