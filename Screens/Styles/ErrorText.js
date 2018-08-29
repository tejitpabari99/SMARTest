import React from "react";
import {
  Text
} from "react-native";

const ErrorText = ({children}) => {
  return(
    <Text
      style={{
      	fontSize: 18,
        includeFontPadding: true,
        color: "#ff0000",
        alignSelf: 'center',
        textAlign: 'center'
      }}
    >
      {children}
    </Text>
  );
};

export {ErrorText};
