import React from "react";
import {
  Text
} from "react-native";

const TitleText = ({children}) => {
  return(
    <Text
      style={{
        fontWeight: 'bold',
      	fontSize: 20,
      	marginBottom:15,
        marginTop:5,
        alignSelf: 'center',
        color: "#2800e9",
        textDecorationLine: 'underline',
      }}
    >
      {children}
    </Text>
  );
};

export {TitleText};
