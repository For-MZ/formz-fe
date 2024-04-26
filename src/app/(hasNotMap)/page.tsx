'use client';

import Divider from '@/components/UI/Divider';
import Toast from '@/components/UI/Toast';
import Checkbox from '@/components/UI/CheckBox';
import useModal from '@/hooks/useModal';
import Alert from '@/components/UI/Alert';
import Confirm from '@/components/UI/Confirm';
import TextField from '@/components/UI/TextField';
import Loading from '@/components/UI/Loading';
import { useEffect, useState } from 'react';
import Button from '@/components/UI/Button';
import DropDown from '@/components/UI/DropDown';
import Star from '/public/icons/star.svg';
import Printer from '/public/icons/printer.svg';
import Avatar from '@/components/UI/Avatar';
import LandingPage from '@/components/LandingPage/page';

export default function HomePage() {
  const [loading] = useState(true);
  const [category, setCategory] = useState([]);

  return (
    <>
      <LandingPage />
      {/* <TextField labelText="제목" id="title" name="title" placeholder="제목을 입력해주세요." />
      <TextField labelText="본문" placeholder="본문을 입력해주세요." />
      <TextField labelText="에러 테스트" hasError helpMessage="헬프 에러 미시지" />
      <Checkbox isNotValid onChange={() => {}} />
      <Divider style="none" />
      <Divider text="text" style="text" />
      <Toast text="메세지다" type="default" />

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
      <Button
        design="outline"
        text="버튼임!"
        disabled={false}
        onClick={() => console.log('클릭')}
        LeftIcon={Printer}
      />
      <Button
        design="outline"
        text="버튼임!"
        disabled={true}
        onClick={() => console.log('클릭')}
        RightIcon={Star}
      />
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
      <Avatar imageUrl="/image/user.png" /> */}
    </>
  );
}
