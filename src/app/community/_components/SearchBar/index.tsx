'use client';

import TextField from '@/components/UI/TextField';
import useInput from '@/hooks/useInput';

export default function SearchBar() {
  const [input, handleChange] = useInput('');

  return <TextField value={input} onChange={handleChange} placeholder="커뮤니티 검색" />;
}
