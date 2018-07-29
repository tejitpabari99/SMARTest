import React from "react";
import {
  Text
} from "react-native";

const SuccessText = ({children}) => {
  return(
    <Text
      style={{
      	fontSize: 18,
        includeFontPadding: true,
        color: "#4400ff",
        alignSelf: 'center'
      }}
    >
      {children}
    </Text>
  );
};

export {SuccessText};
