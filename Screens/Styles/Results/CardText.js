import React from "react";
import {
  Text
} from "react-native";

const CardText = ({children}) => {
  return(
    <Text
      style={{
      	fontSize: 15,
      	padding: 5,
        marginBottom: 8,
        marginTop: 8,
        includeFontPadding: true,
        color: "#000000",
      }}
    >
      {children}
    </Text>
  );
};

export {CardText};
