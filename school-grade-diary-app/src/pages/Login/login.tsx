import {
  Card,
  CardBody,
  CardHeader,
  Text,
  Heading,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";
import { TextInput } from "../../components/TextInput/TextInput";
import { useLoginForm } from "./hooks/useLoginForm/useLoginForm";
import {
  FormSection,
  IllustrationContainer,
  LoginPageContainer,
} from "./login.styles";

export const Login = () => {
  const { submitForm, control, formError } = useLoginForm();

  return (
    <LoginPageContainer>
      <IllustrationContainer />
      <FormSection>
        <Card size={"lg"}>
          <CardHeader>
            <Heading>Bem Vindo!</Heading>
            <Text fontSize={"md"} color="CaptionText">
              Entre seu com email e senha
            </Text>
          </CardHeader>
          <CardBody paddingTop={"8px"}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextInput
                  placeholder="email"
                  {...field}
                  fieldError={formError.email}
                  errorMessage={formError.email?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <PasswordInput placeholder="senha" {...field} />
              )}
            />
          </CardBody>
          <CardFooter
            width={"100%"}
            alignSelf={"stretch"}
            justifyContent="space-around"
          >
            <Button
              onClick={() => submitForm()}
              backgroundColor={"tomato"}
              width={"50%"}
              size={"lg"}
            >
              Login
            </Button>
            <Button backgroundColor={"tomato"} width={"40%"} size={"lg"}>
              Registro
            </Button>
          </CardFooter>
        </Card>
      </FormSection>
    </LoginPageContainer>
  );
};
