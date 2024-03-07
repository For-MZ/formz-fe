'use client';

import { useState } from 'react';

/**
 *  input value 상태 관리 훅
 *
 * @param initialValue input value 초깃값
 * @returns
 */
export default function useInput(
  initialValue: string = '',
): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  return [inputValue, handleInputChange];
}
