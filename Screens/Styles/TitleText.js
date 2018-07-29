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
      	marginBottom:13,
        marginTop:5,
        alignSelf: 'center',
        color: "#000000",
      }}
    >
      {children}
    </Text>
  );
};

export {TitleText};
