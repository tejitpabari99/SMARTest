import React from "react";
import {
  Text
} from "react-native";

const TextBoxTitle = ({children}) => {
  return(
    <Text
      style={{
      	fontSize: 18,
      	marginBottom:2,
        marginTop:2,
        includeFontPadding: true,
        color: "#000000",
        textDecorationLine: 'underline'
      }}
    >
      {children}
    </Text>
  );
};

export {TextBoxTitle};
