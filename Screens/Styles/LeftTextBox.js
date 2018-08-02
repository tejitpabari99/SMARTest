import React from "react";
import {
  Text
} from "react-native";

const LeftTextBox = ({children}) => {
  return(
    <Text
      style={{
      	fontSize: 18,
        includeFontPadding: true,
        color: "#000000",
      }}
    >
      {children}
    </Text>
  );
};

export {LeftTextBox};
