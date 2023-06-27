import {createContext, FC, ReactNode, useCallback, useState} from "react";
import { v4 } from "uuid";

export interface alert {
  type: "success" | "danger" | "info" | "warning";
  message: string;
  id: string;
  timeout: number;
  showProgress?: boolean;
  remove?: (id: string) => void;
}

type Alerts={
  alert: Array<alert>;
  addAlert: (newAlert: Omit<alert, "id">) => void;
  removeAlert: (id: alert["id"]) => void;
}

export const AlertProvider = createContext(
  {} as Alerts
);
type Props={
  children:ReactNode
}
const AlertWrapper= ({children}:Props) => {
  const [alert, setAlert] = useState<alert[]>([]);

  const addAlert = useCallback((newAlert: Omit<alert, "id">) => {
    setAlert((state) => [...state, { ...newAlert, id: v4() }]);
  }, []);

  const removeAlert = useCallback((id: alert["id"]) => {
    setAlert((state) => state.filter((el) => el.id !== id));
  }, []);

  return (
    <AlertProvider.Provider value={{ alert, addAlert, removeAlert }}>
      {children}
    </AlertProvider.Provider>
  );
};

export default AlertWrapper;
