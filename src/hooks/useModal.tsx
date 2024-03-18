import { useState } from 'react';

export default function useModal(): [boolean, React.MouseEventHandler<HTMLElement>, () => void] {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return [isOpen, onOpen, onClose];
}
