'use client';

import styles from './PostForm.module.scss';
import DropDown from '@/components/UI/DropDown';
import TextField from '@/components/UI/TextField';
import Editor from '../Editor';
import useInput from '@/hooks/useInput';
import { useState } from 'react';

const CATEGORY_OPTIONS = ['정책', '공간', '주택', '취업', '창업', '자유', '꿀팁'];

export default function PostForm() {
  const [title, handleChangeTitle] = useInput('');
  const [selectedCategory, setSelectedCategory] = useState('정책');

  return (
    <div className={styles.form}>
      <div className={styles.categoryDropDown}>
        <label htmlFor="">카테고리</label>
        <DropDown
          options={CATEGORY_OPTIONS}
          selected={selectedCategory}
          onSelect={(selected) => {
            setSelectedCategory(selected);
          }}
        />
      </div>
      <div className={styles.title}>
        <TextField width="100%" label="제목" value={title} onChange={handleChangeTitle} />
      </div>
      <div className={styles.content}>
        <label>본문</label>
        <Editor />
      </div>
      <div className={styles.buttons}>
        <button>취소</button>
        <button>작성</button>
      </div>
    </div>
  );
}
