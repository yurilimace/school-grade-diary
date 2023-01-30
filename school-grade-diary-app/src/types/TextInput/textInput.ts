import { InputProps } from "@chakra-ui/input";
import { FieldError } from "react-hook-form";

export interface TextInputProps extends InputProps {
  label?: string;
  placeholder?: string;
  handleChange?: (value: string) => void;
  inputSize?: "xs" | "sm" | "md" | "lg";
  requiredField?: boolean;
  fieldError?: FieldError;
}
