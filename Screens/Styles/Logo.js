import React from "react";
import {
  Image
} from "react-native";

const Logo = () => {
  return(
    <Image
      source={require("../../Images/SMARTest.png")}
      style={{ alignSelf: 'center', marginBottom:15, }}
    />
  );
};

export {Logo};
