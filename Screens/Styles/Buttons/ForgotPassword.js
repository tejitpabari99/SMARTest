import React from "react";
import {
  Text
} from "react-native";

const ForgotPassword = ({children, onPress }) => {
  return(
    <Text
      style={{
      	fontSize: 18,
        includeFontPadding: true,
        color: "#4400ff",
        alignSelf: 'center',
        textDecorationLine: 'underline',
      }}
      onPress={onPress}
    >
    {children}
    </Text>

  );
};

export {ForgotPassword};
