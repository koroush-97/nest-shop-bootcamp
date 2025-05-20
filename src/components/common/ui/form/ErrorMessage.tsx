import { FieldErrors } from "react-hook-form";

interface Props {
  errors: FieldErrors<any>;
  name: string;
}

export default function ErrorMessage({ errors, name }: Props) {
  return (
    <div className={"text-rose-600"}>
      {errors && errors[name] && (errors[name]?.message as string)}
    </div>
  );
}
