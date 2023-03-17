import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, type, name, ...rest }: ButtonProps) {
  return (
    <button id={name} type={type} name={name} {...rest}>
      {children}
    </button>
  );
}
