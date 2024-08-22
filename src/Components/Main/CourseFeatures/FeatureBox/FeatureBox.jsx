import React from 'react'

export default function FeatureBox({ ...props }) {
  return (
    <div className='w-100 h-100 bg_main_two rounded-3 overflow-hidden d-flex justify-content-center'>
      <div className="row w-100 h-100">
        <div className="col-3 h-100">
          <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
              <img src={props.srclink} style={{width:'80%'}} className='object-fit-cover' alt="" />
          </div>
        </div>
        <div className="col-9 h-100 d-flex justify-content-center align-items-start flex-column row-gap-3">
          <div>
            <span className='fs-4 fw-bold text_color_basic'>{props.title}</span>
          </div>
          <div style={{width:'90%'}}>
            <span className='fs-6 fw-bold color_white_50 lh-lg'>{props.subTitle}</span>
          </div>
        </div>
      </div>
    </div>
  )
}