import { useContext } from "react";
import { AlertProvider } from "./index";

const useAlert = () => {
  return useContext(AlertProvider);
};

export default useAlert;
