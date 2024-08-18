import React from 'react'
import CardCourse from './CardCourse/CardCourse';
import './Course.css'

let valuesCardCourse = [
  { id: 1, srcImg: '../public/images/imgCourse/img_23843466619bcd3a364.webp', title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12 },
  { id: 2, srcImg: '../public/images/imgCourse/img_54652366619bc6856dc.webp', title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12 },
  { id: 3, srcImg: '../public/images/imgCourse/img_78061766619be7be94c.webp', title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12 },
  { id: 4, srcImg: '../public/images/imgCourse/img_73993966619bc0b4a65.webp', title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12 },
  { id: 5, srcImg: '../public/images/imgCourse/img_23843466619bcd3a364.webp', title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12 },
  { id: 6, srcImg: '../public/images/imgCourse/img_54652366619bc6856dc.webp', title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12 },
  { id: 7, srcImg: '../public/images/imgCourse/img_78061766619be7be94c.webp', title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12 },
  { id: 8, srcImg: '../public/images/imgCourse/img_73993966619bc0b4a65.webp', title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12 },
]

function Course() {
  return (
    <div className='mt-5 pb_items_box'>
      <div className='d-flex justify-content-center align-items-center'>
        <span className='fs-1 text_color_basic fw-bold'>دوره های آکادمی</span>
      </div>
      <div className='py-3 mt-4 d-flex justify-content-center align-items-center flex-column row-gap-3'>
        {/* <CardCourse {...valuesCardCourse[0]}></CardCourse> */}
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12">
            <CardCourse {...valuesCardCourse[0]}></CardCourse>
          </div>
          <div className="col-lg-3 col-md-4 col-12 d-md-flex d-none">
            <CardCourse {...valuesCardCourse[1]}></CardCourse>
          </div>
          <div className="col-lg-3 col-md-4 d-md-flex d-none">
            <CardCourse {...valuesCardCourse[2]}></CardCourse>
          </div>
          <div className="col-lg-3 col-md-4 d-lg-flex d-none">
            <CardCourse {...valuesCardCourse[3]}></CardCourse>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12">
            <CardCourse {...valuesCardCourse[4]}></CardCourse>
          </div>
          <div className="col-lg-3 col-md-4 col-12 d-md-flex d-none">
            <CardCourse {...valuesCardCourse[5]}></CardCourse>
          </div>
          <div className="col-lg-3 col-md-4 d-md-flex d-none">
            <CardCourse {...valuesCardCourse[6]}></CardCourse>
          </div>
          <div className="col-lg-3 col-md-4 d-lg-flex d-none">
            <CardCourse {...valuesCardCourse[7]}></CardCourse>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course;