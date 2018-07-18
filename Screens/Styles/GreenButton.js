import React from "react";
import {
  Text,
  TouchableOpacity
} from "react-native";
import {
  Button
} from "native-base";

const GreenButton = ({ onPress, children }) => {
  return(
    <TouchableOpacity>
      <Button
        style={{ marginTop: 10 }}
        full
        rounded
        success
        onPress={onPress}
      >
        <Text> {children} </Text>
      </Button>
    </TouchableOpacity>
  );
};

export {GreenButton};
