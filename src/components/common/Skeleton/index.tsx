import React, { useState } from 'react';
import './Skeleton.scss';

type SkeletonPropsType = {
  width?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
};

function Skeleton({ width, height, margin, borderRadius }: SkeletonPropsType) {
  const [isSkeletonVisible, setIsSkeletonVisible] = useState(false);

  return (
    <span
      className={`skeleton ${isSkeletonVisible ? 'visible' : ''}`}
      style={{ width, height, margin, borderRadius }}
    />
  );
}

export default Skeleton;
