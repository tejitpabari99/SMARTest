import React from "react";
import {
  Container
} from "native-base";

const Box = ({children}) => {
  return(
    <Container
      style={{
        flex: 2,
        backgroundColor: "#ffffff",
        padding: 15,
        justifyContent: "flex-start"
        // position: 'relative'
      }}
    >
      {children}
    </Container>
  );
};

export {Box};
