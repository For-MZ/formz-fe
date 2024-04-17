'use client';

import { useState } from 'react';

/**
 *  input value 상태 관리 훅
 *
 * @param initialValue input value 초깃값
 * @returns
 */
export default function useInput(initialValue: string) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const initValue = () => {
    setInputValue('');
  };

  return [inputValue, handleChange, initValue, setInputValue] as const;
}
