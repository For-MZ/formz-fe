'use client';

import styles from './PostForm.module.scss';
import DropDown from '@/components/UI/DropDown';
import TextField from '@/components/UI/TextField';
import useInput from '@/hooks/useInput';
import { useEffect, useState } from 'react';
import Button from '@/components/UI/Button';
import dynamic from 'next/dynamic';
const TextEditor = dynamic(() => import('./Editor'), { ssr: false }); // 에디터 ssr 지원안해서 다이나믹 임포트

const CATEGORY_OPTIONS = ['정책', '공간', '주택', '취업', '창업', '자유', '꿀팁'];

export default function PostForm() {
  const [title, handleChangeTitle] = useInput('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  console.log(category);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO 로그인 여부 확인

    // TODO 유효성 검사

    // TODO 게시글 생성 요청
    // await axios.post('/community/posts', { selectedCategory, title });
  };

  const handleSelectCategory = (option: string) => {
    setCategory(option);
  };

  useEffect(() => {
    handleValidation();
  }, [category]);

  const handleValidation = () => {
    if (category.length === 0) {
      setErrorMessage('카테고리를 선택해주세요.');
    } else {
      setErrorMessage('');
    }
  };

  const handleChangeContent = (data: string) => {
    setContent(data);

    if (content.length < 10 && content.length > 1000) {
      setErrorMessage('게시글 본문은 10~1000자 사이의 내용을 입력해주세요.');
    }
  };

  return (
    <form className={styles.postForm} onSubmit={handleSubmit}>
      <div className={styles.category}>
        <label>카테고리</label>
        <DropDown
          placeholder="카테고리를 선택해주세요."
          options={CATEGORY_OPTIONS}
          selectedOption={category}
          onSelect={handleSelectCategory}
        />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <div className={styles.title}>
        <TextField
          labelText="제목"
          value={title}
          onChange={handleChangeTitle}
          placeholder="1~60자 사이의 제목을 입력해주세요."
        />
      </div>
      <div className={styles.content}>
        <label>본문</label>
        <TextEditor initialValue={content} onChange={handleChangeContent} />
      </div>
      <div className={styles.buttons}>
        <Button type="outline" text="취소" disabled={false} onClick={() => {}} />
        <Button type="filled" text="게시글 작성" disabled={false} onClick={() => {}} />
      </div>
    </form>
  );
}
