import { InputProps } from "@chakra-ui/input";
import { ControllerProps, FieldError } from "react-hook-form";
import { ControllerRenderProps } from "react-hook-form/dist/types";
import { RefCallBack } from "react-hook-form/dist/types/form";

export interface TextInputProps extends InputProps {
  label?: string;
  placeholder?: string;
  handleChange?: (value: string) => void;
  inputSize?: "xs" | "sm" | "md" | "lg";
  requiredField?: boolean;
  fieldError?: FieldError;
  fowardRef?: RefCallBack;
}
