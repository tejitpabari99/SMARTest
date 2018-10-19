import React from "react";
import {
  Text,
  TouchableOpacity
} from "react-native";
import {
  Button
} from "native-base";

const BlueSmallButton = ({ onPress, children }) => {
  return(
    <TouchableOpacity style={{ alignItems: 'center'}}>
      <Button
        style={{ marginTop: 10, marginBottom: 10, justifySelf: 'center' }}
        info
        onPress={onPress}
      >
        <Text style={{ fontSize: 20, textAlign: 'center',  marginRight: 10, marginLeft: 3}}> {children} </Text>
      </Button>
    </TouchableOpacity>
  );
};

export {BlueSmallButton};
