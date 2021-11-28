import React from 'react';
import './Loader.css';

export default function Loader(): React.ReactElement {
  return (
    <div className='lds-ellipsis'>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
