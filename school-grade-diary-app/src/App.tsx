import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router/router";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { CreateMockServer } from "./services/MockServer";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  CreateMockServer();
  return (
    <ThemeProvider theme={Theme}>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Router} />
        </QueryClientProvider>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
