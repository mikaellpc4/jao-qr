import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, type, name, ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      name={name}
      {...rest}
      className="h-14 w-3/4 max-w-[30rem] self-center rounded-xl border-2 border-black text-2xl font-semibold hover:bg-gray-100 sm:self-auto"
    >
      {children}
    </button>
  );
}
