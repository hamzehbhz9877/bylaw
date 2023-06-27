import { useContext } from "react";
import { AuthProvider } from "./index";

const useAuth = () => {
  return useContext(AuthProvider);
};

export default useAuth;
