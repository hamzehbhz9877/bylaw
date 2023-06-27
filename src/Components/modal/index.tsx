import ReactModal from "react-modal";
import { ReactNode } from "react";

export type modal = Omit<ReactModal.Props, "isOpen" | "onRequestClose">;

ReactModal.setAppElement("body");

type Props= {
  showModal: boolean;
  close: () => void;
  children: ReactNode;
  options?: modal | null;
}

const Modal = ({ options, showModal, close, children }: Props) => {
  if (!showModal) {
    return null;
  }

  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="onRequestClose Example"
      onRequestClose={close}
      className={`Modal rtl ${options?.className}`}
      style={{ content: { width: "430px" } }}
      overlayClassName="Overlay"
      {...options}

    >
      {children}
    </ReactModal>
  );
};

export default Modal;
