import React from 'react'
import GetImg from '../../GetImg/GetImg.jsx'
import img1 from '../../../assets/images/logo/img_6741756661aa47a4982.webp'

export default function Logo() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <img src={GetImg(img1)} alt="" />
    </div>
  )
}

