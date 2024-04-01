'use client';

import { createContext, useState } from 'react';

export const FilterContext = createContext({
  category: '전체',
  setCategory: (value: string) => {},
  sorting: '최신순',
  setSorting: (value: string) => {},
});

type Props = { children: React.ReactNode };

export default function FilterProvider({ children }: Props) {
  const [category, setCategory] = useState('전체');
  const [sorting, setSorting] = useState('최신순');

  return (
    <FilterContext.Provider value={{ category, sorting, setCategory, setSorting }}>{children}</FilterContext.Provider>
  );
}
