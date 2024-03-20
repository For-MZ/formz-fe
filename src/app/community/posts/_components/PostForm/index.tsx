'use client';

import styles from './PostForm.module.scss';
import DropDown from '@/components/UI/DropDown';
import TextField from '@/components/UI/TextField';
import { useEffect, useState } from 'react';
import Button from '@/components/UI/Button';
import dynamic from 'next/dynamic';
const TextEditor = dynamic(() => import('./TextEditor'), { ssr: false }); // 에디터 ssr 지원안해서 다이나믹 임포트

const CATEGORY_OPTIONS = ['정책', '공간', '주택', '취업', '창업', '자유', '꿀팁'];

export default function PostForm() {
  const [category, setCategory] = useState<string | null>(null);
  const [categoryError, setCategoryError] = useState('');
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState('');

  console.log(category);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO 로그인 여부 확인

    // TODO 유효성 검사

    // TODO 게시글 생성 요청
    // await axios.post('/community/posts', { selectedCategory, title });
  };

  const handleSelectCategory = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  useEffect(() => {
    if (!category) {
      setCategoryError('카테고리를 선택해야 합니다.');
    } else {
      setCategoryError('');
    }
  }, [category]);

  const handleChangeTitle = (titleValue: string) => {
    setTitle(titleValue);

    if (title.length > 0 && title.length < 61) {
      setTitleError('');
    }
  };

  const handleChangeContent = (editorHtmlValue: string) => {
    setContent(editorHtmlValue);

    if (content.length > 9 && content.length < 1001) {
      setContentError('본문은 10자 이상 1000자 이하여야 합니다.');
    }
  };

  return (
    <form className={styles.postForm} onSubmit={handleSubmit}>
      <div className={styles.category}>
        <label htmlFor="category">카테고리</label>
        <DropDown
          id="category"
          placeholder="카테고리를 선택해주세요."
          options={CATEGORY_OPTIONS}
          onSelectProp={handleSelectCategory}
          hasError={!!categoryError}
        />
        {categoryError && <p className={`${!!categoryError && 'errorMessage'}`}>{categoryError}</p>}
      </div>
      <div className={styles.title}>
        <label htmlFor="title">제목</label>
        <TextField
          id="title"
          value={title}
          onChangeProp={handleChangeTitle}
          placeholder="1~60자 사이의 제목을 입력해주세요."
          hasError={!!titleError}
          helpMessage={titleError}
          onFocus={() => {
            if (!(title.length > 0 && title.length < 61)) {
              setTitleError('제목은 1자 이상 60자 이하여야 합니다.');
            }
          }}
        />
      </div>
      <div className={styles.content}>
        <label htmlFor="content">본문</label>
        <TextEditor id="content" value={content} onChange={handleChangeContent} />
        {contentError && <p>{contentError}</p>}
      </div>
      <div className={styles.buttons}>
        <Button type="outline" text="취소" disabled={false} onClick={() => {}} />
        <Button type="filled" text="게시글 작성" disabled={false} onClick={() => {}} />
      </div>
    </form>
  );
}
