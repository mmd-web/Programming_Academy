import React from 'react'
import TitlesMain from '../TitlesMain/TitlesMain'
import ArticlesCard from './ArticlesCard/ArticlesCard'
import GetImg from '../../GetImg/GetImg.jsx'
import './Articles.css'

import ArticlesImg1 from '../../../assets/images/ArticlesImg/img_13683666619bdd21686.webp';
import ArticlesImg2 from '../../../assets/images/ArticlesImg/img_17700666619be12b370.webp';
import ArticlesImg3 from '../../../assets/images/ArticlesImg/img_49810666619be2799bc.webp';
import ArticlesImg4 from '../../../assets/images/ArticlesImg/img_85545166619be3d0d9d.webp';

export default function Articles() {
  return (
    <div className='w-100 h-100 py-5 mt-3'>
      <TitlesMain title="تعدادی از مدارک اعطا شده"></TitlesMain>
      <div className='w-100 h-100 mt-5'>
        <div className="row row-gap-4">
          <div className="col-xl-3 col-md-6 col-12">
            <ArticlesCard srclink={GetImg(ArticlesImg1)} title="طراحی UI" way="برنامه نویسی" date="1403,خرداد"></ArticlesCard>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <ArticlesCard srclink={GetImg(ArticlesImg2)} title="طراحی UI" way="دیزاین" date="1403,خرداد"></ArticlesCard>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <ArticlesCard srclink={GetImg(ArticlesImg3)} title="طراحی UI" way="برنامه نویسی" date="1403,خرداد"></ArticlesCard>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <ArticlesCard srclink={GetImg(ArticlesImg4)} title="طراحی UI" way="دیزاین" date="1403,خرداد"></ArticlesCard>
          </div>
        </div>
      </div>
    </div>
  )
}