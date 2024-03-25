import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './_customEditor.scss';
import { ImageActions } from '@xeger/quill-image-actions'; // 이미지 리사이징 모듈
import { ImageFormats } from '@xeger/quill-image-formats'; // 이미지 리사이징 모듈

Quill.register('modules/imageActions', ImageActions);
Quill.register('modules/imageFormats', ImageFormats);

type Props = {
  placeholder?: string;
  hasError?: boolean;
  value?: string;
  onChangeProp?: (htmlValue: string, textValue: string) => void;
  onBlurProp?: (textValue: string) => void;
};

export default function TextEditor({ value, onChangeProp, placeholder, hasError, onBlurProp }: Props) {
  const modules = {
    imageActions: {},
    imageFormats: {},
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', { align: [] }],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
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

  const handleChange = (content, delta, source, editor) => {
    onChangeProp?.(editor.getHTML(), editor.getText());
  };

  const handleBlur = (previousSelection, source, editor) => {
    onBlurProp?.(editor.getText());
  };

  return (
    <ReactQuill
      className={`${hasError && 'error'}`}
      theme="snow"
      modules={modules}
      formats={formats}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}
