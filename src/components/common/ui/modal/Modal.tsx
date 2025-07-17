import React from "react";
import Portal from "../portal/Portal";

interface Props {
  children: React.ReactNode;
  title: string;
  closeModal: () => void;
}

export default function Modal({ children, title, closeModal }: Props) {
  return (
    <Portal onClose={closeModal}>
      <div className=" z-10  min-w-[100vw] md:min-w-[50vw]   md:min-h-[50vh] min-h-[100vh] overflow-hidden">
        <div className="flex  justify-between p-8 border-b bg-white border-gray-200 text-[22px] ">
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 transition z-[100]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="42"
              height="42"
              fill="currentColor"
            >
              <path d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.11 5.7a1 1 0 0 0-1.41 1.42L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
            </svg>
          </button>
          <span>{title}</span>
        </div>
        <div className="p-6 text-[18px] min-h-[400px] max-h-[500px] bg-gray-200">
          {children}
        </div>
      </div>
    </Portal>
  );
}
