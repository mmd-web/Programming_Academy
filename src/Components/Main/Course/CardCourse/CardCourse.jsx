import React from 'react'
import Badge from './Badge/Badge';

function CardCourse({ ...props }) {
  return (
    <div>
      <div className="card w_card_course bg_main_two">
        <img src={props.srcImg} className="card-img-top" alt="..." />
        <div className="card-body py-4 w-100 d-flex row-gap-4 flex-column">
          <div className='w-100 d-flex justify-content-end align-items-center'>
            <h5 className="card-title fs-6 fw-bold color_white_100">{props.title}</h5>
          </div>
          <div className='w-100 d-flex justify-content-start align-items-center'>
            <span className='color_white_100 fs-6'>{props.stars}</span>
          </div>
          <div className='d-flex justify-content-start align-items-start flex-row'>
            <div className='h-100 d-flex justify-content-start align-items-end flex-column' style={{width:'40%'}}>
              <span className='color_white_100 fs-4' dir='rtl'>{props.discountPrice} <span className='fs-6'>تومان</span></span>
              <span className='fs-5 str_price_main' dir='rtl'>{props.priceMain} </span>
            </div>
            <div className='h-100 d-flex justify-content-end align-items-center mt-2' style={{width:'60%'}}>
              <Badge percentage={props.percentageDiscount} ></Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCourse;