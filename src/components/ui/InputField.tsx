import { InputFieldProps } from "@/Types/InputFieldTypes";
import { Label } from "./Label";

export const InputField = ({
  id,
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  rules,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col w-full gap-3">
      <Label id={id} label={label} />

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="bg-gray-200 rounded-lg p-3 outline-gray-500"
        {...register(name, rules)}
      />

      {error && (
        <p className="bg-red-500/80 p-3 text-white rounded-lg text-sm">
          {error.message}
        </p>
      )}
    </div>
  );
};
