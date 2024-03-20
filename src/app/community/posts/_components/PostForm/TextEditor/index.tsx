'use client';

import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './_customEditor.scss';
import styles from './TextEditor.module.scss';

type Props = {
  id?: string;
  value: string;
  onChange: (html: string) => void;
};

export default function TextEditor({ id, value, onChange }: Props) {
  // Quill 컴포넌트의 내용을 관리하기 위한 상태
  const [editorHtml, setEditorHtml] = useState(value || '');

  // Quill의 내용이 변경될 때마다 호출되는 핸들러 함수
  const handleChange = (html: string) => {
    setEditorHtml(html);
    onChange?.(html);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  return (
    <>
      <ReactQuill
        id={id}
        className={styles.editor}
        theme="snow"
        modules={modules}
        formats={formats}
        value={editorHtml}
        onChange={handleChange}
        placeholder="본문을 입력해주세요."
      />
    </>
  );
}
