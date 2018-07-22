import React from "react";
import {
  Text,
  TouchableOpacity
} from "react-native";
import {
  Button
} from "native-base";

const GreenSmallButton = ({ onPress, children }) => {
  return(
    <TouchableOpacity>
      <Button
        style={{ marginTop: 10, marginBottom: 10, justifySelf: 'center' }}
        success
        onPress={onPress}
      >
        <Text style={{ padding: 10, fontSize: 15,}}> {children} </Text>
      </Button>
    </TouchableOpacity>
  );
};

export {GreenSmallButton};
