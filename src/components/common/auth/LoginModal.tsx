import React, { Dispatch, SetStateAction } from "react";
import Modal from "../ui/modal/Modal";
import { useModal } from "@/store/ModalContext";
import { useForm } from "react-hook-form";
import { Input } from "../ui/form/Input";
import { useMutation } from "@tanstack/react-query";
import { LoginApiCall } from "@/api/Auth";
import { useUser } from "@/store/AuthContext";
import { toast } from "react-toastify";
interface Props {
  onClose: () => void;
}
interface FormData {
  identifier: string;
  password: string;
}

export default function LoginModal({ onClose }: Props) {
  const { Login } = useUser();

  const { openModal, closeModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const mutate = useMutation({ mutationFn: LoginApiCall });

  const onSubmit = (data: FormData) => {
    mutate.mutate(data, {
      onSuccess: (response) => {
        console.log("response : =====>", response);
        Login(response.jwt, response.user);
        toast.success("شما با موفقیت وارد حساب کاربری خود شدید");
        closeModal();
      },
    });
  };

  return (
    <Modal title={"login"} closeModal={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col">
          <Input
            type="text"
            register={register("identifier", {
              required: "enter your username please",
            })}
            label={"Username"}
            {...{ placeholder: "enter your user name..." }}
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
      <span onClick={() => openModal("register")}> go to register modal </span>
    </Modal>
  );
}
