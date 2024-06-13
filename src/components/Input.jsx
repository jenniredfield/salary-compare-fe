import { Controller, useFormContext } from "react-hook-form";

export const Input = ({ name, id, placeholder }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <input
            className="focus:outline-none rounded-md text-black border-2 border-black-100 pl-2 py-2 w-[300px] mb-4"
            onChange={onChange}
            placeholder={placeholder}
            id={id}
          />
        );
      }}
    />
  );
};
