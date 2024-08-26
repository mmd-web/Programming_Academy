import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='w-100 py-5 bg_main_two d-flex justify-content-center align-items-center' dir='rtl'>
      <div className='w-75 d-flex align-items-center flex-column row-gap-5'>
        <div className="row w-100 row-gap-0 row-gap-4">
          <div className="col-lg-6 col-12">
            <div className='d-flex flex-column justify-content-center align-items-start row-gap-3 w-75'>
              <span className='fw-bold fs-4 color_white_100'>درباره ما</span>
              <span className='fw-bold fs-6 color_white_50 lh-lg'>دارا یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند.</span>
            </div>
          </div>
          <div className="col-lg-6 col-12 d-flex align-items-center">
            <div className='w-25 d-flex column-gap-4'>
              <img src="src/assets/images/TrustLogo/img_39561266633efd6095e.webp" style={{width:'100%'}} alt="" />
              <img src="src/assets/images/TrustLogo/img_61917266633eff972a7.webp" style={{width:'100%'}} alt="" />
              <img src="src/assets/images/TrustLogo/img_84225566633efbcda11.webp" style={{width:'100%'}} alt="" />
            </div>
          </div>
        </div>
        <div className='w-100 d-flex justify-content-center align-items-center'>
          <span className=' color_white_50'>کلیه حقوق متعلق به دارا میباشد</span>
        </div>
      </div>
    </div>
  )
}
