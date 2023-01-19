import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router/router";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/theme";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ChakraProvider>
        <RouterProvider router={Router} />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
