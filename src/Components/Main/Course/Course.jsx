import React from 'react'
import CardCourse from './CardCourse/CardCourse';
import TitlesMain from '../TitlesMain/TitlesMain';
import GetImg from '../../GetImg/GetImg';
import './Course.css'

import imgCourse1 from '../../../assets/images/imgCourse/img_23843466619bcd3a364.webp';
import imgCourse2 from '../../../assets/images/imgCourse/img_54652366619bc6856dc.webp';
import imgCourse3 from '../../../assets/images/imgCourse/img_78061766619be7be94c.webp';
import imgCourse4 from '../../../assets/images/imgCourse/img_73993966619bc0b4a65.webp';
import imgCourse5 from '../../../assets/images/imgCourse/img_23843466619bcd3a364.webp';
import imgCourse6 from '../../../assets/images/imgCourse/img_54652366619bc6856dc.webp';
import imgCourse7 from '../../../assets/images/imgCourse/img_78061766619be7be94c.webp';
import imgCourse8 from '../../../assets/images/imgCourse/img_73993966619bc0b4a65.webp';

let valuesCardCourse = [
  { id: 1, srcImg: GetImg(imgCourse1), title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12+'%' },
  { id: 2, srcImg: GetImg(imgCourse2), title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12+'%' },
  { id: 3, srcImg: GetImg(imgCourse3), title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12+'%' },
  { id: 4, srcImg: GetImg(imgCourse4), title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12+'%' },
  { id: 5, srcImg: GetImg(imgCourse5), title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12+'%' },
  { id: 6, srcImg: GetImg(imgCourse6), title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12+'%' },
  { id: 7, srcImg: GetImg(imgCourse7), title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12+'%' },
  { id: 8, srcImg: GetImg(imgCourse8), title: 'آموزش جاوااسکریپت', stars: 3, priceMain: 1.222, discountPrice: 1.121, percentageDiscount: 12+'%' },
]

function Course() {
  return (
    <div className='py-5'>
      <TitlesMain title="دوره های آکادمی"></TitlesMain>
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