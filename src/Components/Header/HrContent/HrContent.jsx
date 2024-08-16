import React from 'react'
import BtnMain from '../../BtnMain/BtnMain';
import './HrContent.css'

function HrContent() {
  return (
    <div className='w-100 h-100 container'>
      <div className='h_75'>
        <div className="row h-100">
          <div className="col-6 justify-content-center align-items-end d-flex flex-column">
            <div className='d-flex h-75 justify-content-end align-items-end flex-column row-gap-3'>
              <h1 className='text_color_basic'>آکادمی برنامه نویسی دارا</h1>
              <span className='mt-4 color_white_100 fs-2'>آیدین آسرایی</span>
              <span dir='rtl' className='color_white_50 fs-5 mb-5'>با من ، علم برنامه نویسی رو راحت یاد بگیر و پیشرفت کن.</span>
            </div>
            <div className='w-100 h-25 d-flex justify-content-start align-items-start flex-row-reverse column-gap-3'>
              <BtnMain className="btn bg_basic color_white_100 w_btn_main py-2" title="ارتباط با من" />
              <BtnMain className="btn bg_basic_outline w_btn_main py-2" title="دوره های من" />
            </div>
          </div>
          <div className="col-6 justify-content-center align-items-center d-flex">
            <img src="../public/images/hrImage/img_517335666206237e4d9.webp" width={100} alt="" />
          </div>
        </div>
      </div>
      <div className='h_25'></div>
    </div>
  )
}

export default HrContent;