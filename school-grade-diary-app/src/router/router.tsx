import React from "react";

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { RouterContainer } from "../components/RouteContainer/routeContainer";
import { Home } from "../pages/Home/home";
import { Login } from "../pages/Login/login";
import { Playground } from "../pages/Playground/playground";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";

export const Router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <RouterContainer
        render={() => (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        )}
      />
    ),
  },
  {
    path: "/playground",
    element: <RouterContainer render={() => <Playground />} />,
  },
  {
    path: "/login",
    element: <RouterContainer render={() => <Login />} />,
  },
]);
