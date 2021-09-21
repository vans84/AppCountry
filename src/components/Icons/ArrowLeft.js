import React from 'react';

export default function ArrowLeft(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      width='18px'
      {...props}
      height='18px'
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z' />
    </svg>
  );
}