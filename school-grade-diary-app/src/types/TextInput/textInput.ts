import { InputProps } from "@chakra-ui/input";

export interface TextInputProps extends InputProps {
  label?: string;
  placeholder?: string;
  handleChange?: (value: string) => void;
  inputSize?: "xs" | "sm" | "md" | "lg";
  requiredField?: boolean;
  fieldError?: boolean;
  errorMessage?: string;
}
