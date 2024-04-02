'use client';

import Button from '@/components/UI/Button';
import CopyLinkIcon from '/public/icons/link.svg';

export default function CopyPostUrl() {
  return (
    <Button design="transparent" onClick={() => {}}>
      <CopyLinkIcon width="20" height="20" />
    </Button>
  );
}
