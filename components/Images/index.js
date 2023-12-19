import React from 'react';
import Image from 'next/image';

export default function Images(props) {
  const { className, src, alt } = props;
  return (
    <div className={className ? className : ''}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        placeholder="blur"
        blurDataURL={src}
      />
    </div>
  );
}
