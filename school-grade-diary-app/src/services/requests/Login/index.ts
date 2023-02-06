import { LoginForm, LoginFormResponse } from "../../../types/Login/login";
import { AxiosConfig } from "../../config";

export const LoginRequest = async (body: LoginForm) => {
  const { data } = await AxiosConfig.post<LoginFormResponse>("/login", body);
  return data;
};
