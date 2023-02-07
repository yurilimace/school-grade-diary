import React from "react";
import { Navigate, redirect } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth/useAuth";

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { userToken } = useAuth();
  console.log("testing");
  if (!userToken) {
    return <Navigate to={"/login"} replace />;
  }

  return <> {children} </>;
};
