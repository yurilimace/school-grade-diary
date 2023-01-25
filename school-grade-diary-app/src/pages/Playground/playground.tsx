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

export const Playground = () => {
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
          fieldError
          requiredField
        />
        <FormControl />
      </div>
      <div>
        <PasswordInput fieldError requiredField label="Teste" />
        <FormControl />
      </div>
    </>
  );
};
