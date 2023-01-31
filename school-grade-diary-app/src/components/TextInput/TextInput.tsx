import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";

import { RiErrorWarningLine } from "react-icons/ri";
import { LoginForm } from "../../types/LoginForm/login-form";
import { TextInputProps } from "../../types/TextInput/textInput";

export const TextInput = ({
  label,
  placeholder,
  handleChange,
  inputSize,
  requiredField,
  fieldError,
  ...props
}: TextInputProps) => {
  const placeholderText = placeholder ? placeholder : "";
  return (
    <FormControl isRequired={requiredField} isInvalid={!!fieldError}>
      <FormLabel> {label} </FormLabel>
      <InputGroup>
        {fieldError && (
          <InputRightElement
            children={<RiErrorWarningLine size={20} color="red" />}
          />
        )}
        <Input
          borderColor={"#b1b7c1"}
          role={"input"}
          size={inputSize}
          placeholder={placeholderText}
          onChange={(event) => handleChange && handleChange(event.target.value)}
          {...props}
        />
      </InputGroup>
      {fieldError && (
        <FormErrorMessage> {fieldError.message} </FormErrorMessage>
      )}
    </FormControl>
  );
};
