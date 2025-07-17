import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface ContextProps {
  currentModal: ModalType;
  openModal: (modalName: ModalType) => void;
  closeModal: () => void;
}

type ModalType = "login" | "register" | null;

const ModalContext = createContext<ContextProps>({
  currentModal: null,
  openModal: (modalName: ModalType): void => {},
  closeModal: (): void => {},
});

export const useModal = () => useContext(ModalContext);

export function ModalContextProvider({ children }: Props) {
  const [showModal, setShowModal] = useState<ModalType>(null);

  useEffect(() => {
    const hush = window.location.hash.substring(1);
    if (hush.includes("-modal")) {
      const modalName = hush.split("-")[0] as ModalType;
      setShowModal(modalName);
    }
  }, []);

  const openModal = (modalName: ModalType): void => {
    setShowModal(modalName);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <ModalContext.Provider
      value={{
        currentModal: showModal,
        openModal: openModal,
        closeModal: closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
