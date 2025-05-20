import React, { Dispatch, SetStateAction } from "react";
import Modal from "../ui/modal/Modal";
import Portal from "../ui/portal/Portal";

interface Props {
  onClose: () => void;
  setShowModal: Dispatch<SetStateAction<"login" | "register" | null>>;
}

export default function LoginModal({ onClose, setShowModal }: Props) {
  return (
    <Modal title={"login"} closeModal={onClose}>
      <form></form>
      <span onClick={() => setShowModal("register")}>
        {" "}
        go to register modal{" "}
      </span>
    </Modal>
  );
}
