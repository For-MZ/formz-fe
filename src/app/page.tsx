'use client';

import Divider from '@/components/UI/Divider';
import Toast from '@/components/UI/Toast';
import Checkbox from '@/components/UI/CheckBox';
import useModal from '@/hooks/useModal';
import useInput from '@/hooks/useInput';
import useForm from '@/hooks/useForm';
import Alert from '@/components/UI/Alert';
import Confirm from '@/components/UI/Confirm';
import TextField from '@/components/UI/TextField';
import icon from '../../public/icons/x.png';

export default function Home() {
  const [isOpenAlert, onOpenAlert, onCloseAlert] = useModal();
  const [isOpenConfirm, onOpenConfirm, onCloseConfirm] = useModal();
  const [inputValue, handleInputChange] = useInput('');
  const [form, handleFormChange] = useForm({
    email: '',
    password: '',
  });

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
        type="text"
        label="라벨"
        value={inputValue}
        onChange={handleInputChange}
        helpMessage="기본 헬프메시지"
      />
      <TextField
        success
        id="email"
        label="라벨"
        value={form.email}
        onChange={handleFormChange}
        placeholder="Placeholder"
        helpMessage="성공 헬프 메시지"
        leftIcon={icon}
        rightIcon={icon}
        inputName="email"
      />
      <TextField
        error
        id="password"
        label="라벨"
        value={form.password}
        onChange={handleFormChange}
        placeholder="Placeholder"
        helpMessage="실패 헬프 메시지"
        leftIcon={icon}
        rightIcon={icon}
        inputName="password"
      />
      <TextField
        disabled
        id="address"
        label="disabled 인풋"
        value={form.address}
        onChange={handleFormChange}
        placeholder="Placeholder"
        helpMessage="disabled 헬프 메시지"
        leftIcon={icon}
        rightIcon={icon}
        inputName="address"
      />
      <h1>타이포 그래피 테스트 h1</h1>
      <h2>타이포 그래피 테스트 h2</h2>
      <h3>타이포 그래피 테스트 h3</h3>
      <h4>타이포 그래피 테스트 h4</h4>
      <h5>타이포 그래피 테스트 h5</h5>
      <h6>타이포 그래피 테스트 h6</h6>
      <Checkbox isNotValid onChange={() => {}} />
      <Divider style="none" />
      <Divider text="text" style="text" />
      <Toast message="Description" color="green" />
      <Toast message="Description" color="blue" />
      <Toast message="Description" color="yellow" />
      <Toast message="Description" color="red" />
    </>
  );
}
