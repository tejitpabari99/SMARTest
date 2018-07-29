import React from "react";
import {
  Text,
  TouchableOpacity
} from "react-native";
import {
  Button
} from "native-base";

const BlueBlockButton = ({ onPress, children }) => {
  return(
    <TouchableOpacity>
      <Button
        style={{ marginTop: 10, marginBottom: 10 }}
        full
        block
        info
        onPress={onPress}
      >
        <Text> {children} </Text>
      </Button>
    </TouchableOpacity>
  );
};

export {BlueBlockButton};
