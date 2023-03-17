import type { InputHTMLAttributes } from "react";
import type { UseFormRegister } from "react-hook-form";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  error?: string;
  register: UseFormRegister<any>;
};
