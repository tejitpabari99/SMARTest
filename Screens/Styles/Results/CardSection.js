import React from "react";
import { View } from "react-native";

const CardSection = ({ children }) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderColor: "#ddd",
    // position: "relative",

    borderWidth: 1,
    borderRadius: 2,
  }
};

export { CardSection };
