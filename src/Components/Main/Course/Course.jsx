import React from 'react'
import CardCourse from './CardCourse/CardCourse';
import './Course.css'

let valuesCardCourse = [
  {id : 1 , srcImg : '../public/images/imgCourse/img_23843466619bcd3a364.webp' , title : 'آموزش جاوااسکریپت' , stars : 3 , priceMain : 1.222 , discountPrice : 1.000 , percentageDiscount : 12},
  {id : 2 , srcImg : '../public/images/imgCourse/img_54652366619bc6856dc.webp' , title : 'آموزش جاوااسکریپت' , stars : 3 , priceMain : 1.222 , discountPrice : 1.000 , percentageDiscount : 12},
  {id : 3 , srcImg : '../public/images/imgCourse/img_78061766619be7be94c.webp' , title : 'آموزش جاوااسکریپت' , stars : 3 , priceMain : 1.222 , discountPrice : 1.000 , percentageDiscount : 12},
  {id : 4 , srcImg : '../public/images/imgCourse/img_73993966619bc0b4a65.webp' , title : 'آموزش جاوااسکریپت' , stars : 3 , priceMain : 1.222 , discountPrice : 1.000 , percentageDiscount : 12},
  {id : 5 , srcImg : '../public/images/imgCourse/img_23843466619bcd3a364.webp' , title : 'آموزش جاوااسکریپت' , stars : 3 , priceMain : 1.222 , discountPrice : 1.000 , percentageDiscount : 12},
  {id : 6 , srcImg : '../public/images/imgCourse/img_54652366619bc6856dc.webp' , title : 'آموزش جاوااسکریپت' , stars : 3 , priceMain : 1.222 , discountPrice : 1.000 , percentageDiscount : 12},
  {id : 7 , srcImg : '../public/images/imgCourse/img_78061766619be7be94c.webp' , title : 'آموزش جاوااسکریپت' , stars : 3 , priceMain : 1.222 , discountPrice : 1.000 , percentageDiscount : 12},
  {id : 8 , srcImg : '../public/images/imgCourse/img_73993966619bc0b4a65.webp' , title : 'آموزش جاوااسکریپت' , stars : 3 , priceMain : 1.222 , discountPrice : 1.000 , percentageDiscount : 12},
]

function Course() {
  return (
    <div className='bg-danger mt-5 pb_items_box'>
      <div className='d-flex justify-content-center align-items-center'>
        <span className='fs-1 text_color_basic fw-bold'>دوره های آکادمی</span>
      </div>
      <div className='bg-warning py-3 mt-4'>
        <CardCourse {...valuesCardCourse[0]}></CardCourse>
      </div>
    </div>
  )
}

export default Course;