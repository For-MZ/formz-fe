import { useState } from 'react';

export default function useModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return { isOpenModal, onOpenModal, onCloseModal };
}
