import React from 'react';
import code from '../images/image-qr-code.png';

export default function Code() {
  return (
    <div className='code'>
      <div className='inner-code'>
        <img src={code} className='image' alt="code" />

        <h3 className='improve'>Improve your front-end skills by building projects</h3>
        <p className='scan'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}