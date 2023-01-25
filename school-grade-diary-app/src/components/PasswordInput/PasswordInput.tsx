import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { TextInputProps } from "../../types/TextInput/textInput";

export const PasswordInput = ({
  label,
  placeholder,
  handleChange,
  inputSize,
  requiredField,
  fieldError,
  errorMessage,
  ...props
}: TextInputProps) => {
  const [isInputTypePassword, setIsInputTypePassword] = useState(true);

  return (
    <FormControl
      isRequired={requiredField}
      isInvalid={fieldError && requiredField}
    >
      <FormLabel> {label} </FormLabel>
      <InputGroup>
        <Input
          paddingRight={fieldError ? "4rem" : "40px"}
          role="password-input"
          placeholder={placeholder}
          onChange={({ target: { value } }) =>
            handleChange && handleChange(value)
          }
          type={isInputTypePassword ? "password" : "text"}
        />

        <InputRightElement
          width={"auto"}
          children={
            <>
              {fieldError && (
                <RiErrorWarningLine
                  data-testid="input-field-error-icon"
                  size={20}
                  color="red"
                />
              )}
              <IconButton
                data-testid="show-password-icon"
                aria-label="show-password-iconbutton"
                variant={"ghost"}
                icon={isInputTypePassword ? <FaEye /> : <FaEyeSlash />}
                onClick={() =>
                  setIsInputTypePassword((prevState) => !prevState)
                }
              />
            </>
          }
        />
        {fieldError && requiredField && errorMessage && (
          <FormErrorMessage> {errorMessage} </FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};
