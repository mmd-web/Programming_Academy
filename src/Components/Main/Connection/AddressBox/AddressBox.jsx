import React from 'react'

export default function AddressBox({...props}) {
  return (
    <div>
      <div className='column-gap-4 bg_main_two rounded-3 d-flex justify-content-start align-items-center flex-row py-4 px-3' dir='rtl'>
        <div style={{width:'60px'}}>
          <img src={props.srclink} alt="" />
        </div>
        <div>
          <span className='fs-5 color_white_100'>{props.title}</span>
        </div>
      </div>
    </div>
  )
}