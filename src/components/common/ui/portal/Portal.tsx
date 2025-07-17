import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Portal({ children, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return createPortal(
    <div
      onClick={onClose}
      className={
        "fixed top-0 right-0 bottom-0 left-0 z-10 bg-opacity-50 bg-black flex justify-center items-center"
      }
    >
      <div className={""} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("portal")!
  );
}
