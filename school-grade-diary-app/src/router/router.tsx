import React from "react";

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import { Playground } from "../pages/Playground/playground";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/playground",
    element: <Playground />,
  },
]);
