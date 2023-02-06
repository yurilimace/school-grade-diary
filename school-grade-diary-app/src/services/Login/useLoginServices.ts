import { useMutation } from "react-query";
import axios from "axios";
import { LoginForm, LoginFormResponse } from "../../types/Login/login";
import { AxiosConfig } from "../config";
import { LoginRequest } from "../requests/Login";

export const useLoginService = () => {
  const request = async (loginForm: LoginForm) => {
    return await LoginRequest(loginForm);
  };
  return useMutation<LoginFormResponse, any, LoginForm>(request);
};
