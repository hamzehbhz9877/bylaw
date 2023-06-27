import {FC, ReactNode} from "react";
type Props={
  children:ReactNode
}
const ModalHeader= ({children}:Props) => {
  return <div className="Modal__header">{children}</div>;
};
const ModalBody= ({children}:Props) => {
  return <div className="Modal__body">{children}</div>;
};
const ModalFooter= ({children}:Props) => {
  return <div className="Modal__footer">{children}</div>;
};

export { ModalHeader, ModalBody, ModalFooter };