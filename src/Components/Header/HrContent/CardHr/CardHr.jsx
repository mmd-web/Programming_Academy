import React from 'react'

function CardHr({...props}) {
  return (
      <div className='bg_main_two w-100 h-100 py-3 px-3 rounded-4'>
        <div className='d-flex justify-content-end align-items-center flex-row'>
          <div className='d-flex justify-content-start align-items-end flex-column'>
            <span className='fs-2' style={{color:props.colorText}}>{props.count}+</span>
            <span className='text-light fs-6'>مدرک اعطا شده</span>
          </div>
          <div>
            <img src={props.images} className='w-100' alt="" />
          </div>
        </div>
      </div>
  )
}

export default CardHr;