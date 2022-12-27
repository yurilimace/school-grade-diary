import React from "react";

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { RouterContainer } from "../components/RouteContainer/routeContainer";
import { Home } from "../pages/Home/home";
import { Playground } from "../pages/Playground/playground";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <RouterContainer render={() => <Home />} />,
  },
  {
    path: "/playground",
    element: <RouterContainer render={() => <Playground />} />,
  },
]);
