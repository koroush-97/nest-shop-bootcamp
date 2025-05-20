import { useId } from "react";
import { UseFormRegisterReturn, FieldErrors } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface Props {
  type?: "text" | "password" | "email" | "tel" | "number";
  label?: string;
  placeholder?: string;
  register: UseFormRegisterReturn<any>;
  errors: FieldErrors<any>;
}

export function Input({
  type = "text",
  label,
  placeholder = "",
  register,
  errors,
}: Props) {
  const id = useId();
  const name = register.name;
  let haserror = false;

  if (errors && errors[name]) {
    haserror = true;
  }

  return (
    <div className={""}>
      <div className="flex flex-col">
        {label && (
          <label htmlFor={id} className="mb-1 font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          {...register}
          placeholder={placeholder}
          className={` border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            haserror && "border-red "
          } `}
        />
      </div>

      <ErrorMessage errors={errors} name={name} />
    </div>
  );
}
