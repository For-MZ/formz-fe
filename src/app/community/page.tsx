'use client';

import Modal from '@/components/UI/Modal';
import Confirm from '@/components/UI/Confirm';
import useModal from '@/hooks/useModal';

export default function CommunityPage() {
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();
  const { isOpenModal: isOpenConfirm, onOpenModal: onOpenConfirm, onCloseModal: onCloseConfirm } = useModal();

  return (
    <>
      <button onClick={onOpenModal}>모달 오픈</button>
      {isOpenModal && (
        <Modal onClose={onCloseModal}>
          <p>모달 컨텐츠</p>
        </Modal>
      )}

      <button onClick={onOpenConfirm}>삭제</button>
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
        >
          정말 삭제하시겠습니까?
        </Confirm>
      )}
    </>
  );
}
