import React from 'react'
import Badge from './Badge/Badge';

function CardCourse({ ...props }) {
  return (
    <div>
      <div className="card w-100 bg_main_two">
        <img src={props.srcImg} className="card-img-top" alt="..." />
        <div className="card-body py-4 w-100 d-flex row-gap-4 flex-column">
          <div className='w-100 d-flex justify-content-end align-items-center'>
            <h5 className="card-title fs-6 fw-bold color_white_100">{props.title}</h5>
          </div>
          <div className='w-100 d-flex justify-content-start align-items-center'>
            <span className='color_white_100 fs-6 d-flex justify-content-center align-items-center column-gap-1'>
              <img src="../public/images/icon/icons8-star-96.png" className='w_icon_star' alt="" />
              {props.stars}
            </span>
          </div>
          <div className='d-flex flex-column'>
            <div className='h-100 d-flex justify-content-between align-items-center flex-row w-100'>
              <div>
                <span className='color_white_100 fs-4' dir='rtl'>{props.discountPrice} <span className='fs-6'>تومان</span></span>
              </div>
              <div>
                <Badge percentage={props.percentageDiscount} ></Badge>
              </div>
            </div>
            <div>
              <span className='str_price_main fs-6'>{props.priceMain}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCourse;