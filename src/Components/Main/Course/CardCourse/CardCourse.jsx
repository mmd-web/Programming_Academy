import React from 'react'
import Badge from './Badge/Badge';
import GetImg from '../../../GetImg/GetImg.jsx';

import IconStar from '../../../../assets/images/icon/icons8-star-96.png';

function CardCourse({ ...props  }) {
  console.log(props.srcImg);
  
  return (
    <a href='#' className='text-decoration-none mt-4'>
      <div className="card w-100 bg_main_two">
        <div className='w_img_box'>
          <img src={props.srcImg} className="card-img-top w-100 h-100 object-fit-cover" alt="..." />
        </div>
        <div className="card-body py-4 w-100 d-flex row-gap-4 flex-column">
          <div className='w-100 d-flex justify-content-end align-items-center'>
            <h5 className="card-title fs-6 fw-bold color_white_100">{props.title}</h5>
          </div>
          <div className='w-100 d-flex justify-content-start align-items-center'>
            <span className='color_white_100 fs-6 d-flex justify-content-center align-items-center column-gap-1'>
              <img src={GetImg(IconStar)} className='w_icon_star' alt="" />
              {props.stars}
            </span>
          </div>
          <div className='d-flex flex-column'>
            <div className='h-100 d-flex justify-content-between align-items-center flex-row w-100'>
              <div>
                <span className='color_white_100 fs-4' dir='rtl'>{props.firstPrice} <span className='fs-6'>تومان</span></span>
              </div>
              <div>
                <Badge percentage={props.discount}></Badge>
              </div>
            </div>
            <div>
              <span className='str_price_main fs-6'>{props.lastPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default CardCourse;