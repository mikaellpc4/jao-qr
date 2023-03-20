import type { InputProps } from "./props";

export function Input({
  name,
  displayName,
  error,
  register,
  ...rest
}: InputProps) {
  return (
    <div className="flex h-12 w-full flex-col">
      <div className="flex w-full">
        <span className="flex h-12 w-[25%] items-center justify-center rounded-l-md border-[1px] border-gray-400 bg-gray-300 font-semibold text-black/60 shadow-lg">
          {displayName}
        </span>
        <input
          className="w-[80%] rounded-r-md border-[1px] border-gray-400 pl-4 font-semibold"
          type="text"
          {...rest}
          {...register(name)}
        />
      </div>
      <span className="h-full text-center font-bold text-red-400 xs:ml-[24.5%] xs:text-left">
        {error}
      </span>
    </div>
  );
}
