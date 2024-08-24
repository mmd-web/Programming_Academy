import React from 'react'
import Badge from '../../Course/CardCourse/Badge/Badge'

export default function ArticlesCard({ ...props }) {
  return (
    <div>
      <a href='#' className="card w-100 bg_main_two">
        <div className='w_img_box'>
          <img src={props.srclink} className="card-img-top w-100 h-100 object-fit-cover" alt="..." />
        </div>
        <div className="card-body py-4 w-100 d-flex row-gap-4 flex-column">
          <div className='w-100 d-flex justify-content-end align-items-center'>
            <h5 className="card-title fs-6 fw-bold color_white_100">{props.title}</h5>
          </div>
          <div className='d-flex flex-column'>
            <div className='h-100 d-flex justify-content-between align-items-center flex-row w-100'>
              <span className=' color_white_50 fs-6'>
                {props.date}
              </span>
              <div className=''>
                <Badge percentage={props.way}></Badge>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
