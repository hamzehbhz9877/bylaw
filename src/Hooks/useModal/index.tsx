import { useCallback, useState, ReactNode } from "react";
import { modal } from "Components/modal";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ReactNode | null>(null);
  const [options, setOptions] = useState<modal | null>(null);

  const handleOpen = useCallback((data: ReactNode, options?: modal) => {
    setIsModalOpen(true);
    setModalData(data);
    if (options) setOptions(options);
    else setOptions(null);
  }, []);

  const handleClose = useCallback(() => setIsModalOpen(false), []);

  return { isModalOpen, modalData, handleOpen, options, handleClose };
};

export default useModal;
