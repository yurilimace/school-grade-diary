import React from "react";

import { SideMenu } from "../../components/SideMenu/sidemenu";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { TextInput } from "../../components/TextInput/TextInput";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";
import { FieldError } from "react-hook-form";

export const Playground = () => {
  const formErrorField: FieldError = {
    message: "Error Message",
    type: "value",
  };
  const TextInputHandleChange = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <SideMenu />
      <div>Playground Page</div>
      <div>
        <TextInput
          label="teste"
          placeholder="teste de input"
          handleChange={TextInputHandleChange}
          requiredField
          fieldError={formErrorField}
        />
        <FormControl />
      </div>
      <div>
        <PasswordInput requiredField label="Teste" />
        <FormControl />
      </div>
    </>
  );
};
