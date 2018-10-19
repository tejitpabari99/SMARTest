import React from "react";
import {
  Text,
  TouchableOpacity
} from "react-native";
import {
  Button
} from "native-base";

const BlueRoundButton = ({ onPress, children }) => {
  return(
    <TouchableOpacity>
      <Button
        style={{ marginTop: 10, marginBottom: 10 }}
        full
        rounded
        info
        onPress={onPress}
      >
        <Text style={{fontSize: 20, textAlign: 'center'}}> {children} </Text>
      </Button>
    </TouchableOpacity>
  );
};

export {BlueRoundButton};
