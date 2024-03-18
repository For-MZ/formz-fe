import dynamic from 'next/dynamic';
import styles from './Editor.module.scss';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

export default function Editor() {
  const [quillValue, setQuillValue] = useState('');

  const handleChangeQuillValue = (content, delta, source, editor) => {
    setQuillValue(editor.getContents());
    console.log(content);
    console.log(delta);
    console.log(source);
  };

  const MODULES = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
        [
          {
            color: ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff'],
          },
          { background: [] },
        ],
        ['image'],
        ['clean'],
      ],
    },
  };

  const FORMATS = [
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
        className={styles.editor}
        theme="snow"
        placeholder="게시글을 작성해주세요."
        value={quillValue}
        onChange={handleChangeQuillValue}
        modules={MODULES}
        formats={FORMATS}
      />
    </>
  );
}
