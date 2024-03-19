'use client';

import Divider from '@/components/UI/Divider';
import Toast from '@/components/UI/Toast';
import Checkbox from '@/components/UI/CheckBox';
import useModal from '@/hooks/useModal';
import useInput from '@/hooks/useInput';
import Alert from '@/components/UI/Alert';
import Confirm from '@/components/UI/Confirm';
import TextField from '@/components/UI/TextField';
import LoginButton from '@/components/UI/LoginButton';
import Loading from '@/components/UI/Loading';
import { useState } from 'react';
import Button from '@/components/UI/Button';
import Star from '/public/icons/star.svg';
import Printer from '/public/icons/printer.svg';

export default function Home() {
  const [loading] = useState(true);
  const [isOpenAlert, onOpenAlert, onCloseAlert] = useModal();
  const [isOpenConfirm, onOpenConfirm, onCloseConfirm] = useModal();
  const [inputValue, handleInputChange] = useInput('');

  return (
    <>
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
      <TextField
        type="email"
        labelText="이메일"
        id="email"
        name="email"
        value={inputValue}
        placeholder="이메일을 입력해주세요."
        onChange={handleInputChange}
        width="200px"
        height="200px"
      />

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
        design="filled"
        text="버튼임!"
        disabled={false}
        onClick={() => console.log('클릭')}
        LeftIcon={Printer}
        RightIcon={Star}
        type="submit"
        width="200px"
        height="20px"
      />
      <Button design="filled" text="버튼임!" disabled={true} onClick={() => console.log('클릭')} />
      <Button design="outline" text="버튼임!" disabled={false} onClick={() => console.log('클릭')} LeftIcon={Printer} />
      <Button design="outline" text="버튼임!" disabled={true} onClick={() => console.log('클릭')} RightIcon={Star} />
      <Button
        design="transparent"
        text="버튼임!"
        disabled={false}
        fontSize="30px"
        onClick={() => console.log('클릭')}
        LeftIcon={Printer}
        RightIcon={Star}
      />
      <Button
        design="transparent"
        text="버튼임!"
        disabled={true}
        onClick={() => console.log('클릭')}
        LeftIcon={Printer}
        RightIcon={Star}
      />
      <Button
        design="transparent"
        text="test button"
        disabled={false}
        onClick={() => console.log('클릭')}
        LeftIcon={Printer}
        RightIcon={Star}
      />
    </>
  );
}
