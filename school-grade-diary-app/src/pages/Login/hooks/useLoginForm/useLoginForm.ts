import { useForm } from "react-hook-form";
import { LoginForm } from "../../../../types/LoginForm/login-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const useLoginForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Insira um endereço de email valido")
      .required("email é um campo obrigatório"),
    password: yup
      .string()
      .min(6, " senha deve conter no minimo 6 caracteres")
      .max(12, "senha deve conter no máximo 12 caracteres")
      .matches(/[a-z]/, "senha deve letra minuscula")
      .matches(/[A-Z]/, "senha deve conter letra maiuscula")
      .required("campo senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: yupResolver(schema) });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
    return data;
  };

  return {
    register,
    control,
    submitForm: handleSubmit(onSubmit),
    formError: errors,
  };
};
