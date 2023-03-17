import type { InputProps } from "./props";

export function Input({ name, error, register, ...rest }: InputProps) {
  return (
    <div className="flex w-full">
      <span className="flex h-12 w-[25%] items-center justify-center rounded-l-md border-[1px] border-gray-400 bg-gray-300 font-semibold text-black/60 shadow-lg">
        {name}
      </span>
      <input
        className="w-[80%] rounded-r-md border-[1px] border-gray-400 pl-4 font-semibold"
        type="text"
        {...rest}
        {...register(name)}
      />
      <span>{error}</span>
    </div>
  );
}
