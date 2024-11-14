import React from 'react'
import './IntBox.css'
import { StorageAddres } from '../../Course/CardCourse/CardCourse';

function IntBox(props) {
  return (
    <a href='#' className='w_intBox text-decoration-none rounded-4 overflow-hidden d-flex justify-content-center align-items-center flex-row' style={{backgroundImage:`linear-gradient(to right, ${props.colorOne} , ${props.colorTwo})`}}>
      <div className='h-100 d-flex justify-content-center align-items-center' style={{width:"40%"}}>
        <div style={{width:'80%'}}>
          <img src={`${StorageAddres}${props.src.name}`} className='w-100 h-100 object-fit-cover' alt="" />
        </div>
      </div>
      <div className='h-100' style={{width:"60%"}}>
        <div className='w-100 d-flex justify-content-center pe-1 align-items-xl-end align-items-center' style={{height:"60%"}}>
          <span className='fw-bold color_white_100 fs_1_991 w-100 me-3' dir='rtl'>{props.title}</span>
        </div>
        <div className='w-100 d-flex justify-content-end pe-1 align-items-center' style={{height:"40%"}}>
          <a href="#" className='btn rounded-4 btn-light px-4 me-3'>
            <span className='text_color_balck fw-bold'>مشاهده</span>
          </a>
        </div>
      </div>
    </a>
  )
}

export default IntBox;