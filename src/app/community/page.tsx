'use client';

import { useState } from 'react';
import Modal from '@/components/UI/Modal';
import Confirm from '@/components/UI/Confirm';

export default function CommunityPage() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpenModal(true)}>모달 오픈</button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <p>모달 컨텐츠</p>
        </Modal>
      )}

      <button onClick={() => setIsOpenConfirm(true)}>삭제</button>
      {isOpenConfirm && (
        <Confirm
          onConfirm={() => console.log('삭제 완료')}
          onCancel={() => {
            console.log('취소');
            setIsOpenConfirm(false);
          }}
        >
          정말 삭제하시겠습니까?
        </Confirm>
      )}
    </>
  );
}
