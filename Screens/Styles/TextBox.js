import React from "react";
import {
  Text
} from "react-native";

const TextBox = ({children}) => {
  return(
    <Text
      style={{
      	fontSize: 15,
      	marginBottom:5,
        marginTop:5,
        includeFontPadding: true,
        color: "#000000",
      }}
    >
      {children}
    </Text>
  );
};

export {TextBox};
