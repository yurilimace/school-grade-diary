import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router/router";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}

export default App;
