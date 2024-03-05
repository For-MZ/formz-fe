'use client';

import Modal from '@/components/UI/Modal';
import Confirm from '@/components/UI/Confirm';
import useModal from '@/hooks/useModal';
import TextFiled from '@/components/UI/TextFiled';
import { useState } from 'react';
import icon from '../../../public/icons/x.png';

export default function CommunityPage() {
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();
  const { isOpenModal: isOpenConfirm, onOpenModal: onOpenConfirm, onCloseModal: onCloseConfirm } = useModal();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    console.log(value);
  };

  return (
    <>
      <button onClick={onOpenModal}>모달 오픈</button>
      {isOpenModal && (
        <Modal onClose={onCloseModal}>
          <p>모달 컨텐츠</p>
        </Modal>
      )}

      <button onClick={onOpenConfirm}>삭제</button>
      {isOpenConfirm && (
        <Confirm
          onConfirm={() => {
            console.log('삭제 수락');
            onCloseConfirm();
          }}
          onCancel={() => {
            console.log('삭제 취소');
            onCloseConfirm();
          }}
        >
          정말 삭제하시겠습니까?
        </Confirm>
      )}

      <TextFiled
        placeholder="Placeholder"
        helpMessage="Text"
        label="Label"
        isNotValid
        value={form.email}
        onChange={handleChange}
        leftIcon={icon}
        rightIcon={icon}
        htmlFor="email"
        inputId="email"
        inputName="email"
      />
      <TextFiled
        placeholder="Placeholder"
        helpMessage="Text"
        label="Label"
        isNotValid
        value={form.password}
        onChange={handleChange}
        leftIcon={icon}
        rightIcon={icon}
        htmlFor="password"
        inputId="password"
        inputName="password"
      />
    </>
  );
}
