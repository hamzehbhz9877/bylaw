import { FC } from "react";

type Props= {
  open: boolean;
  closeSidebar: () => void;
}

const Backdrop= ({ open, closeSidebar }:Props) => {
  return (
    <div
      className={open ? "backdrop backdrop--open" : "backdrop"}
      onClick={closeSidebar}
    />
  );
};

export default Backdrop;
