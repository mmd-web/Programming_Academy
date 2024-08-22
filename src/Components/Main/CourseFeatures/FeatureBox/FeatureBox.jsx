import React from 'react'

export default function FeatureBox({ ...props }) {
  return (
    <div className='w-100 h-100 bg_main_two rounded-3 overflow-hidden d-flex justify-content-center'>
      <div className="row w-100 h-100 py-2">
        <div className="col-md-3 col-12 d-flex justify-content-center align-items-center py-md-0 py-2">
          <div className='s_box_img_feature d-flex justify-content-center align-items-center'>
            <img src={props.srclink} style={{ width: '95%' }} className='object-fit-cover' alt="" />
          </div>
        </div>
        <div className="col-md-9 col-12 mt-md-0">
          <div className='d-flex justify-content-center align-items-md-start align-items-center flex-column row-gap-3 h-100 py-3'>
            <div>
              <span className='fs-4 fw-bold text_color_basic'>{props.title}</span>
            </div>
            <div style={{ width: '90%' }} className='text-md-end text-center'>
              <span className='fs_subTitle_feature fw-bold color_white_50 lh-lg'>{props.subTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}