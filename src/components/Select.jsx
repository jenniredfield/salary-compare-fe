import { Controller, useFormContext } from "react-hook-form";

export const Select = ({ name, id, placeholder, options }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <select
            className="focus:outline-none rounded-md text-black border-2 border-black-100 pl-2 py-4 w-full mb-4"
            onChange={onChange}
            value={value}
          >
            {options.map((option) => {
              return <option value={option.toLowerCase()}>{option}</option>;
            })}
          </select>
        );
      }}
    />
  );
};
