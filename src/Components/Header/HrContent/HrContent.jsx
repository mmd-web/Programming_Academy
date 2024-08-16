import React from 'react'
import BtnMain from '../../BtnMain/BtnMain';
import CardHr from './CardHr/CardHr';
import './HrContent.css'

function HrContent() {
  return (
    <div className='w-100 h-100 container'>
      <div className='h_50'>
        <div className="row h-100">
          <div className="col-lg-6 col-12 d-flex d-lg-none justify-content-center align-items-center">
            <div>
              <img src="../public/images/hrImage/img_517335666206237e4d9.webp" width={100} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-12 justify-content-center mt_lg px_lg align-items-end d-flex flex-column">
            <div className='d-flex h-75 justify-content-end align-items-end flex-column row-gap-3'>
              <h1 className='text_color_basic fw-bold' dir='rtl'>آکادمی برنامه نویسی دارا</h1>
              <span className='mt-4 color_white_100 fs-2 fw-bold'>آیدین آسرایی</span>
              <span dir='rtl' className='color_white_50 fs-5 mb-5'>با من ، علم برنامه نویسی رو راحت یاد بگیر و پیشرفت کن.</span>
            </div>
            <div className='w-100 h-25 d-flex justify-content-start align-items-start flex-row-reverse column-gap-3'>
              <BtnMain className="btn bg_basic text_color_balck w_btn_main py-2 px_btn_main fw-bold" title="ارتباط با من" />
              <BtnMain className="btn bg_basic_outline w_btn_main py-2 px_btn_main fw-bold" title="دوره های من" />
            </div>
          </div>
          <div className="col-lg-6 d-lg-flex d-none justify-content-center align-items-center">
            <div>
              <img src="../public/images/hrImage/img_517335666206237e4d9.webp" width={100} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='h_25'>
        <div className='row h_maxContent'>
          <div className="col-3 h-100">
            <CardHr images="../public/images/hrImage/itemsImg/img_6640886661f153a221d.webp" count="6" colorText="#19BEEF" title="hello" ></CardHr>
          </div>
          <div className="col-3 h-100">
            <CardHr images="../public/images/hrImage/itemsImg/img_8471886661f151ced59.webp" count="10" colorText="#0ED3A3" title="hello" ></CardHr>
          </div>
          <div className="col-3 h-100">
            <CardHr images="../public/images/hrImage/itemsImg/img_9057316661f155dd207.webp" count="30" colorText="#FFD701" title="hello" ></CardHr>
          </div>
          <div className="col-3 h-100">
            <CardHr images="../public/images/hrImage/itemsImg/img_9081336661f14eddb67.webp" count="15" colorText="#7F1FFF" title="hello" ></CardHr>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HrContent;