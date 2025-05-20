import React from "react";
import Modal from "../ui/modal/Modal";

interface Props {
  onClose: () => void;
}

export default function RegisterModal({ onClose }: Props) {
  return (
    <Modal title={"register"} closeModal={onClose}>
      <form></form>
    </Modal>
  );
}
