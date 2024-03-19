import colorSyntax from '@toast-ui/editor-plugin-color-syntax'; // 컬러 플러그인
import 'tui-color-picker/dist/tui-color-picker.css'; // 컬러 플러그인
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'; // 컬러 플러그인
import '@toast-ui/editor/dist/toastui-editor.css'; // css 플러그인
import '@toast-ui/editor/dist/i18n/ko-kr'; // 한글 플러그인
import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';

type Props = {
  initialValue: string;
  onChange: (data: string) => void;
};

export default function TextEditor({ initialValue, onChange }: Props) {
  const editorRef = useRef<Editor>(null);

  const handleChange = () => {
    const data =
      editorRef.current?.editorInst!.mode === 'markdown'
        ? editorRef.current.getInstance().getMarkdown()
        : editorRef.current!.getInstance().getHTML();
    onChange(data);
  };

  // 이미지 첨부시 실행되는 함수
  // const handleImage = async (file, callback) => {
  // 이미지 서빙 후 url 획득
  // const imageUrl = await getImageUrl(file);
  // 획득 한 url 전달
  // callback(imageUrl);
  // };

  return (
    <>
      <Editor
        initialValue={initialValue || ''}
        autofocus={false}
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        placeholder="본문을 작성해주세요."
        ref={editorRef}
        onChange={handleChange}
        toolbarItems={[['heading', 'bold', 'italic', 'strike'], ['hr', 'quote', 'ul', 'ol'], ['image']]}
        // hooks={{ addImageBlobHook: handleImage }}
        plugins={[colorSyntax]}
        language="ko-KR"
      />
    </>
  );
}
