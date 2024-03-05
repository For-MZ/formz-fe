import Divider from '@/components/UI/Divider';
import Toast from '@/components/UI/Toast/index';
import Input from '@/components/UI/Input/index';
import Checkbox from '@/components/UI/Checkbox/index';

export default function Home() {
  return (
    <>
      <h1>타이포 그래피 테스트 h1</h1>
      <h2>타이포 그래피 테스트 h2</h2>
      <h3>타이포 그래피 테스트 h3</h3>
      <h4>타이포 그래피 테스트 h4</h4>
      <h5>타이포 그래피 테스트 h5</h5>
      <h6>타이포 그래피 테스트 h6</h6>
      <Input />
      <Checkbox />
      <Divider style="none" />
      <Divider text="text" style="text" />
      <Toast message="Description" color="green" />
      <Toast message="Description" color="blue" />
      <Toast message="Description" color="yellow" />
      <Toast message="Description" color="red" />
    </>
  );
}
