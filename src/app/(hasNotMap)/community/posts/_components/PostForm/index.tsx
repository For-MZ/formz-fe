'use client';

import styles from './PostForm.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { QueryClient, useMutation } from '@tanstack/react-query';
import WriteIcon from '/public/icons/edit-2.svg';
import DropDown from '@/components/UI/DropDown';
import TextField from '@/components/UI/TextField';
import Button from '@/components/UI/Button';
import { createPost } from '../../_services/createPost';
// react-quill ssr 지원안해서 다이나믹 임포트
import dynamic from 'next/dynamic';
import { hasMinMaxLength, isEmpty } from '@/utils/validation';
import { PostDetail } from '@/types/Post';
const TextEditor = dynamic(() => import('./TextEditor'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const CATEGORY_OPTIONS = ['정책', '공간', '주택', '취업', '창업', '자유', '꿀팁'];

type Props = {
  data?: PostDetail;
};

export default function PostForm({ data }: Props) {
  const navigate = useRouter();
  const [form, setForm] = useState({
    category: data?.category || '',
    title: data?.title || '',
    content: data?.content || '',
  });
  const [contentTextValue, setContentTextValue] = useState(''); // form.content에서 html 태그 제외한 스트링
  const [didEdit, setDidEdit] = useState({
    category: false,
    title: false,
    content: false,
  });
  console.log(form.title.length);
  const categoryIsInvalid = didEdit.category && isEmpty(form.category);
  const titleIsInvalid = didEdit.title && hasMinMaxLength(form.title, 1, 61);
  const contentIsInvalid = didEdit.content && hasMinMaxLength(contentTextValue, 10, 601);

  console.log(categoryIsInvalid, titleIsInvalid, contentIsInvalid);

  const { mutate } = useMutation({
    mutationFn: () => {
      const body = new FormData();
      body.append('category', form.category);
      body.append('title', form.title);
      body.append('content', form.content);
      return createPost(body);
    },
    onSuccess: () => {
      const queryClient = new QueryClient();
      queryClient.invalidateQueries({ queryKey: ['community', 'posts'] });
      alert('게시글 작성 성공');
    },
    onError: () => {
      alert('게시글 작성 실패');
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO 유효성 검사 로직 추가

    mutate();
  };

  const handleChange = (identifier: 'category' | 'title' | 'content', value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [identifier]: value,
    }));
    // 수정 시 에러 메시지 안보이게
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };

  const handleChangeContentTextValue = (textValue: string) => {
    setContentTextValue(textValue);
  };

  const handleBlur = (identifier: 'category' | 'title' | 'content') => {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  };

  return (
    <form className={styles.postForm} onSubmit={handleSubmit}>
      <div className={styles.categoryBox}>
        <label htmlFor="category" className={styles.categoryLabel}>
          카테고리
        </label>
        <DropDown
          className={styles.categoryDropDown}
          placeholder="게시글과 관련된 카테고리를 선택해주세요 :)"
          options={CATEGORY_OPTIONS}
          value={form.category}
          onSelect={(value) => handleChange('category', value)}
          hasError={categoryIsInvalid}
          onBlur={() => handleBlur('category')}
        />
        {categoryIsInvalid && (
          <p className={`${categoryIsInvalid && styles.errorMessage}`}>카테고리를 선택해주세요.</p>
        )}
      </div>
      <div className={styles.titleBox}>
        <TextField
          labelText="제목"
          className={styles.titleInput}
          labelClassName={styles.titleLabel}
          id="title"
          name="title"
          value={form.title}
          onChange={(event) => handleChange('title', event.target.value)}
          placeholder="본문에 알맞는 제목을 작성해주세요 :)"
          hasError={titleIsInvalid}
          helpMessage="제목은 1~60자 사이로 입력해주세요."
          onBlur={() => handleBlur('title')}
        />
      </div>
      <div className={styles.contentBox}>
        <label htmlFor="content" className={styles.contentLabel}>
          본문
        </label>
        <TextEditor
          value={form.content}
          onChange={(htmlValue, textValue) => {
            handleChange('content', htmlValue);
            handleChangeContentTextValue(textValue);
          }}
          placeholder="본문을 입력해주세요. 욕설, 비방, 광고 관련된 글은 삭제될 수 있습니다."
          hasError={contentIsInvalid}
          onBlur={() => handleBlur('content')}
        />
        {contentIsInvalid && (
          <p className={`${contentIsInvalid && styles.errorMessage}`}>
            본문은 10~600자 사이로 입력해주세요.
          </p>
        )}
      </div>
      <div className={styles.buttonBox}>
        <Button type="button" design="outline" text="취소" onClick={navigate.back} />
        <Button
          type="submit"
          design="filled"
          text={data ? '게시글 수정' : '게시글 작성'}
          LeftIcon={WriteIcon}
        />
      </div>
    </form>
  );
}
