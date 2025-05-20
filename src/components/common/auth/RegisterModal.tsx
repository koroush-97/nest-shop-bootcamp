import React from "react";
import Modal from "../ui/modal/Modal";
import { useForm } from "react-hook-form";
import { Input } from "../ui/form/Input";
import { useMutation } from "@tanstack/react-query";
import { registerApiCall } from "@/api/Auth";
interface Props {
  onClose: () => void;
}

interface FormData {
  username: string;
  email: string;
  password: string;
}

export default function RegisterModal({ onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const mutate = useMutation({ mutationFn: registerApiCall });

  const onSubmit = (data: FormData) => {
    mutate.mutate(data, {
      onSuccess: (response) => {
        console.log("response : =====>", response);
      },
    });
  };

  return (
    <Modal title={"register"} closeModal={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col">
          <Input
            type="text"
            register={register("username", {
              required: "enter your username please",
            })}
            label={"Username"}
            {...{ placeholder: "enter your user name..." }}
            errors={errors}
          />
        </div>

        <div className="flex flex-col">
          <Input
            type="email"
            register={register("email", { required: "Enter your email" })}
            label={"email"}
            {...{ placeholder: "enter your email name..." }}
            errors={errors}
          />
        </div>

        <div className="flex flex-col">
          <Input
            type="password"
            register={register("password", {
              required: "Enter your password",
              minLength: { value: 3, message: "min 3 character" },
            })}
            label={"password"}
            {...{ placeholder: "enter your passwoed name..." }}
            errors={errors}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
}
