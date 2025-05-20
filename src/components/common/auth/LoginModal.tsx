import React, { Dispatch, SetStateAction } from "react";
import Modal from "../ui/modal/Modal";
import { useModal } from "@/store/ModalContext";

interface Props {
  onClose: () => void;
}

export default function LoginModal({ onClose }: Props) {
  const { openModal, closeModal } = useModal();
  return (
    <Modal title={"login"} closeModal={closeModal}>
      <form></form>
      <span onClick={() => openModal("register")}> go to register modal </span>
    </Modal>
  );
}
