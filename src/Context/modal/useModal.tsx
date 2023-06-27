import { useContext } from "react";
import { ModalProvider } from "./index";

const useModalContext = () => {
  return useContext(ModalProvider);
};

export default useModalContext;
