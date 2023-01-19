import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { RiErrorWarningLine } from "react-icons/ri";

interface TextInputProps {
  label: string;
  placeholder?: string;
  handleChange: (value: string) => void;
  inputSize?: "xs" | "sm" | "md" | "lg";
  requiredField?: boolean;
  fieldError?: boolean;
}

export const TextInput = ({
  label,
  placeholder,
  handleChange,
  inputSize,
  requiredField,
  fieldError,
}: TextInputProps) => {
  const placeholderText = placeholder ? placeholder : "";
  return (
    <FormControl
      isRequired={requiredField}
      isInvalid={fieldError && requiredField}
    >
      <FormLabel> {label} </FormLabel>
      <InputGroup>
        {fieldError && (
          <InputRightElement
            children={<RiErrorWarningLine size={20} color="red" />}
          />
        )}
        <Input
          role={"input"}
          size={inputSize}
          placeholder={placeholderText}
          onChange={(event) => handleChange(event.target.value)}
        />
      </InputGroup>
      {fieldError && requiredField && (
        <FormErrorMessage> "Error Message" </FormErrorMessage>
      )}
    </FormControl>
  );
};
