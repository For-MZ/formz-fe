'use client';

import { useState } from 'react';

type Form = {
  [name: string]: string;
};

/**
 * 관련된 input value들의 상태를 객체로 관리하는 훅
 *
 * @param initialValue input value 객체 초깃값
 * @returns
 */
export default function useForm(initialValue: Form): [Form, (event: React.ChangeEvent<HTMLInputElement>) => void] {
  const [form, setForm] = useState<Form>(initialValue);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    console.log(value);
  };

  return [form, handleFormChange];
}
