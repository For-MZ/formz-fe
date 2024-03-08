'use client';

import { useState } from 'react';

type Form = {
  [name: string]: string;
};

/**
 * 관련된 input value들의 상태를 객체로 관리하는 훅
 *
 * @param initialForm input value 객체 초깃값
 * @returns
 */
export default function useForm(initialForm: Form) {
  const [form, setForm] = useState<Form>(initialForm);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return [form, handleFormChange, setForm] as const;
}
