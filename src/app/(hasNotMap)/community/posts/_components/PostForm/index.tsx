'use client';

import styles from './PostForm.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DropDown from '@/components/UI/DropDown';
import TextField from '@/components/UI/TextField';
import Button from '@/components/UI/Button';
import WriteIcon from '/public/icons/edit-2.svg';
import dynamic from 'next/dynamic';
import { PostDetail } from '@/types/Post';
// react-quill ssr 지원안해서 다이나믹 임포트
const TextEditor = dynamic(() => import('./TextEditor'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const CATEGORY_OPTIONS = ['정책', '공간', '주택', '취업', '창업', '자유', '꿀팁'];

type Props = {
  type: 'edit' | 'create';
  data?: PostDetail;
};

export default function PostForm({ type, data }: Props) {
  const navigate = useRouter();
  console.log(data?.category);

  const [category, setCategory] = useState(type === 'edit' ? data?.category : '');
  const [categoryError, setCategoryError] = useState<string>('');
  const [title, setTitle] = useState<string>(data?.title ?? '');
  const [titleError, setTitleError] = useState<string>('');
  const [content, setContent] = useState<string>(data?.content ?? '');
  const [contentError, setContentError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO 로그인 여부 확인

    // TODO 유효성 검사

    // TODO 게시글 생성 요청
    console.log({ category, title, content });
  };

  const handleSelectCategory = (selectedCategory: string) => {
    setCategory(selectedCategory);

    if (selectedCategory) {
      setCategoryError('');
    }
  };

  const handleChangeTitle = (value: string) => {
    setTitle(value);

    if (value.length > 0 && value.length < 61) {
      setTitleError('');
    } else {
      setTitleError('제목은 1자 이상 60자 이하여야 합니다.');
    }
  };

  const handleChangeContent = (htmlValue: string, contentValue: string) => {
    setContent(htmlValue);

    const contentValueLength = contentValue.length - 1;

    if (contentValueLength > 9 && contentValueLength < 1001) {
      setContentError('');
    } else {
      setContentError('본문은 10자 이상 1000자 이하여야 합니다.');
    }
  };

  if (type === 'edit' && data) {
    return (
      <form className={styles.postForm} onSubmit={handleSubmit}>
        <div className={styles.categoryBox}>
          <label htmlFor="category" className={styles.categoryLabel}>
            카테고리
          </label>
          <DropDown
            id="category"
            className={styles.categoryDropDown}
            placeholder="카테고리를 선택해주세요."
            options={CATEGORY_OPTIONS}
            selectedValue={category}
            onSelectProp={handleSelectCategory}
            hasError={!!categoryError}
            onBlur={() => {
              if (!category) {
                setCategoryError('카테고리를 선택해야 합니다.');
              }
            }}
          />
          {categoryError && (
            <p className={`${!!categoryError && styles.errorMessage}`}>{categoryError}</p>
          )}
        </div>
        <div className={styles.titleBox}>
          <TextField
            labelText="제목"
            className={styles.titleInput}
            labelClassName={styles.titleLabel}
            id="title"
            valueProp={title}
            onChangeProp={handleChangeTitle}
            placeholder="1~60자 사이의 제목을 입력해주세요."
            hasError={!!titleError}
            helpMessage={titleError}
            onBlur={() => {
              if (!(title.length > 0 && title.length < 61)) {
                setTitleError('제목은 1자 이상 60자 이하여야 합니다.');
              }
            }}
          />
        </div>
        <div className={styles.contentBox}>
          <label htmlFor="content" className={styles.contentLabel}>
            본문
          </label>
          <TextEditor
            value={content}
            onChangeProp={handleChangeContent}
            placeholder="본문을 입력해주세요."
            hasError={!!contentError}
            onBlurProp={(textValue: string) => {
              const textValueLength = textValue.length - 1;

              if (textValueLength > 9 && textValueLength < 1001) {
                setContentError('');
              } else {
                setContentError('본문은 10자 이상 1000자 이하여야 합니다.');
              }
            }}
          />
          {contentError && (
            <p className={`${contentError && styles.errorMessage}`}>{contentError}</p>
          )}
        </div>
        <div className={styles.buttonBox}>
          <Button type="button" design="outline" text="취소" onClick={() => navigate.back()} />
          <Button type="submit" design="filled" text="게시글 수정" LeftIcon={WriteIcon} />
        </div>
      </form>
    );
  }

  return (
    <form className={styles.postForm} onSubmit={handleSubmit}>
      <div className={styles.categoryBox}>
        <label htmlFor="category" className={styles.categoryLabel}>
          카테고리
        </label>
        <DropDown
          id="category"
          className={styles.categoryDropDown}
          placeholder="카테고리를 선택해주세요."
          options={CATEGORY_OPTIONS}
          selectedValue={category}
          onSelectProp={handleSelectCategory}
          hasError={!!categoryError}
          onBlur={() => {
            if (!category) {
              setCategoryError('카테고리를 선택해야 합니다.');
            }
          }}
        />
        {categoryError && (
          <p className={`${!!categoryError && styles.errorMessage}`}>{categoryError}</p>
        )}
      </div>
      <div className={styles.titleBox}>
        <TextField
          labelText="제목"
          className={styles.titleInput}
          labelClassName={styles.titleLabel}
          id="title"
          valueProp={title}
          onChangeProp={handleChangeTitle}
          placeholder="1~60자 사이의 제목을 입력해주세요."
          hasError={!!titleError}
          helpMessage={titleError}
          onBlur={() => {
            if (!(title.length > 0 && title.length < 61)) {
              setTitleError('제목은 1자 이상 60자 이하여야 합니다.');
            }
          }}
        />
      </div>
      <div className={styles.contentBox}>
        <label htmlFor="content" className={styles.contentLabel}>
          본문
        </label>
        <TextEditor
          value={content}
          onChangeProp={handleChangeContent}
          placeholder="본문을 입력해주세요."
          hasError={!!contentError}
          onBlurProp={(textValue: string) => {
            const textValueLength = textValue.length - 1;

            if (textValueLength > 9 && textValueLength < 1001) {
              setContentError('');
            } else {
              setContentError('본문은 10자 이상 1000자 이하여야 합니다.');
            }
          }}
        />
        {contentError && <p className={`${contentError && styles.errorMessage}`}>{contentError}</p>}
      </div>
      <div className={styles.buttonBox}>
        <Button type="button" design="outline" text="취소" onClick={() => navigate.back()} />
        <Button type="submit" design="filled" text="게시글 작성" LeftIcon={WriteIcon} />
      </div>
    </form>
  );
}
