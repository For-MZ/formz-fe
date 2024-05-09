'use client';

import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './_customEditor.scss';
import { ImageActions } from '@xeger/quill-image-actions'; // 이미지 리사이징 모듈
import { ImageFormats } from '@xeger/quill-image-formats'; // 이미지 리사이징 모듈
import { useRef } from 'react';

Quill.register('modules/imageActions', ImageActions);
Quill.register('modules/imageFormats', ImageFormats);

type Props = {
  placeholder?: string;
  hasError?: boolean;
  value?: string;
  onChange?: (htmlValue: string, textValue: string) => void;
  onBlur?: (textValue: string) => void;
};

export default function TextEditor({ value, onChange, placeholder, hasError, onBlur }: Props) {
  const quillRef = useRef(null);

  // const handleImage = () => {
  //   const input = document.createElement('input');
  //   input.setAttribute('type', 'file');
  //   input.setAttribute('accept', 'image/*');
  //   input.click();
  //   input.onchange = async () => {
  //     const file = input.files[0];

  //     // 현재 커서 위치 저장
  //     const range = getEditor().getSelection(true);

  //     // 서버에 올려질때까지 표시할 로딩 placeholder 삽입
  //     getEditor().insertEmbed(range.index, 'image', `/images/loading.gif`);

  //     try {
  //       // 필자는 파이어 스토어에 저장하기 때문에 이런식으로 유틸함수를 따로 만들어줬다
  //       // 이런식으로 서버에 업로드 한뒤 이미지 태그에 삽입할 url을 반환받도록 구현하면 된다
  //       const filePath = `contents/temp/${Date.now()}`;
  //       const url = await uploadImage(file, filePath);

  //       // 정상적으로 업로드 됐다면 로딩 placeholder 삭제
  //       getEditor().deleteText(range.index, 1);
  //       // 받아온 url을 이미지 태그에 삽입
  //       getEditor().insertEmbed(range.index, 'image', url);

  //       // 사용자 편의를 위해 커서 이미지 오른쪽으로 이동
  //       getEditor().setSelection(range.index + 1);
  //     } catch (e) {
  //       getEditor().deleteText(range.index, 1);
  //     }
  //   };
  // };

  const modules = {
    imageActions: {},
    imageFormats: {},
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', { align: [] }],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        ['clean'],
      ],
      // handlers: {
      //   image: handleImage,
      // },
    },
  };

  const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'background',
    'height',
    'width',
  ];

  return (
    <ReactQuill
      ref={quillRef}
      className={`${hasError && 'error'}`}
      theme="snow"
      modules={modules}
      formats={formats}
      value={value}
      placeholder={placeholder}
      onChange={(content, delta, source, editor) => {
        onChange?.(editor.getHTML(), editor.getText());
      }}
      onBlur={(previousSelection, source, editor) => {
        onBlur?.(editor.getText());
      }}
    />
  );
}
