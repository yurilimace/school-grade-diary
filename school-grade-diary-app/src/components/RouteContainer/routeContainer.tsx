import React, { ReactElement } from "react";
import { RouteContainer } from "./routeContainer.styles";

type RouteContainerProps = {
  render: () => ReactElement;
};

export const RouterContainer = ({ render }: RouteContainerProps) => (
  <RouteContainer>{render()}</RouteContainer>
);
