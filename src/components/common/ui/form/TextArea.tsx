import React, { useId } from "react";
import { UseFormRegisterReturn, FieldErrors } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

import { twMerge } from "tailwind-merge";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  register: UseFormRegisterReturn<any>;
  errors: FieldErrors<any>;
  className?: string;
}

export function TextArea({
  label,
  register,
  errors,
  className = "",
  ...rest
}: Props) {
  const id = useId();
  const name = register.name;
  let haserror = false;

  if (errors && errors[name]) {
    haserror = true;
  }

  return (
    <div className="p-2">
      <div className={twMerge("flex flex-col h-[250px]", className)}>
        {label && (
          <label htmlFor={id} className="mb-1 font-medium text-gray-700">
            {label}
          </label>
        )}
        <textarea
          style={{
            borderColor: haserror ? "#f87171" : "#D1D5DB",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
          id={id}
          {...rest}
          {...register}
          className={`border h-full border-gray-300 rounded-lg p-2 min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 `}
        />
      </div>
      <ErrorMessage errors={errors} name={name} />
    </div>
  );
}
