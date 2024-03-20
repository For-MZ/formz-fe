'use client';

import Divider from '@/components/UI/Divider';
import Toast from '@/components/UI/Toast';
import Checkbox from '@/components/UI/CheckBox';
import useModal from '@/hooks/useModal';
import Alert from '@/components/UI/Alert';
import Confirm from '@/components/UI/Confirm';
import TextField from '@/components/UI/TextField';
import LoginButton from '@/components/UI/LoginButton';
import Loading from '@/components/UI/Loading';
import { useState } from 'react';
import Button from '@/components/UI/Button';
import star from '/public/icons/star.svg';
import DropDown from '@/components/UI/DropDown';

export default function Home() {
  const [loading] = useState(true);
  const [isOpenAlert, onOpenAlert, onCloseAlert] = useModal();
  const [isOpenConfirm, onOpenConfirm, onCloseConfirm] = useModal();
  const [category, setCategory] = useState<string | null>(null);

  return (
    <>
      <TextField labelText="제목" id="title" name="title" placeholder="제목을 입력해주세요." />
      <TextField labelText="본문" placeholder="본문을 입력해주세요." />
      <TextField labelText="에러 테스트" hasError helpMessage="헬프 에러 미시지" />
      <DropDown
        options={['전체', '정책', '공간', '주택', '커뮤니티']}
        onSelectProp={(category: string) => setCategory(category)}
        placeholder="카테고리를 선택해주세요."
      />
      <p>선택된 카테고리: {category}</p>
      <button onClick={onOpenAlert}>Alert 오픈</button>
      {isOpenAlert && (
        <Alert onClose={onCloseAlert} heading="alert 헤딩">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus commodi inventore delectus repellendus harum,
          reprehenderit est ad nesciunt aspernatur eligendi repellat maiores quibusdam pariatur tempora neque quidem.
          Quidem, ex quibusdam!
        </Alert>
      )}
      <button onClick={onOpenConfirm}>Confirm 오픈</button>
      {isOpenConfirm && (
        <Confirm
          onConfirm={() => {
            console.log('삭제 수락');
            onCloseConfirm();
          }}
          onCancel={() => {
            console.log('삭제 취소');
            onCloseConfirm();
          }}
          heading="컨펌 헤딩"
          rightButtonText="삭제"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, culpa distinctio tempore aut praesentium
          possimus provident, ea eveniet alias ullam nobis voluptas quod commodi iusto eligendi consequatur odit
          voluptatibus. Sequi!
        </Confirm>
      )}
      <Checkbox isNotValid onChange={() => {}} />
      <Divider style="none" />
      <Divider text="text" style="text" />
      <Toast message="Description" color="green" />
      <Toast message="Description" color="blue" />
      <Toast message="Description" color="yellow" />
      <Toast message="Description" color="red" />
      <LoginButton type="default" />
      <LoginButton type="kakaoTalk" />
      <LoginButton type="google" />
      <Loading loading={loading} />
      <Button
        type="filled"
        text="버튼임!"
        disabled={false}
        onClick={() => console.log('클릭')}
        leftIcon={star}
        rightIcon={star}
      />
      <Button type="filled" text="버튼임!" disabled={true} onClick={() => console.log('클릭')} />
      <Button type="outline" text="버튼임!" disabled={false} onClick={() => console.log('클릭')} leftIcon={star} />
      <Button type="outline" text="버튼임!" disabled={true} onClick={() => console.log('클릭')} leftIcon={star} />
      <Button
        type="transparent"
        text="버튼임!"
        disabled={false}
        onClick={() => console.log('클릭')}
        leftIcon={star}
        rightIcon={star}
      />
      <Button
        type="transparent"
        text="버튼임!"
        disabled={true}
        onClick={() => console.log('클릭')}
        leftIcon={star}
        rightIcon={star}
      />
    </>
  );
}
