import type { InputProps } from "./props";

export function Input({ name, error, register, ...rest }: InputProps) {
  return (
    <div>
      <input type="text" {...rest} {...register(name)} />
      <span>{error}</span>
    </div>
  );
}
