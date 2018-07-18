import React from "react";
import {
  Image
} from "react-native";

const Picture = ({source}) => {
  return(
    <Image
      source={source}
      style={{
        width: 343,
        height: 200,
        marginBottom:15,
        
      }}
    />
  );
};

export {Picture};
