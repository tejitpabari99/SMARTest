import React from "react";
import {
  Item, Label, Input
} from "native-base";

const TextInput = ({children,onChangeText,secureTextEntry,value}) => {
  return(
    <Item floatingLabel>
      <Label>{children}</Label>
      <Input
        value={value}
        autoCorrect={false}
        autoCapitalize={'none'}
        autoFocus={false}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </Item>
  );
};

export {TextInput};
