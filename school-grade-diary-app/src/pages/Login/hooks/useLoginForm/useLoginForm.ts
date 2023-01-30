import { useForm } from "react-hook-form";
import { LoginForm } from "../../../../types/LoginForm/login-form";

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginForm>();
  const onSubmit = (data: LoginForm) => console.log(data);

  return {
    register,
    control,
    submitForm: handleSubmit(onSubmit),
    formError: errors,
  };
};
