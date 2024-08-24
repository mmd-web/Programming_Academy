import React from 'react'
import TitlesMain from '../TitlesMain/TitlesMain'
import ArticlesCard from './ArticlesCard/ArticlesCard'
import './Articles.css'

export default function Articles() {
  return (
    <div className='w-100 h-100 py-5 mt-3'>
      <TitlesMain title="تعدادی از مدارک اعطا شده"></TitlesMain>
      <div className='w-100 h-100 mt-5'>
        <div className="row">
          <div className="col">
            <ArticlesCard srclink="src/assets/images/ArticlesImg/img_13683666619bdd21686.webp" title="طراحی UI" way="برنامه نویسی" date="1403,خرداد"></ArticlesCard>
          </div>
          <div className="col">
            <ArticlesCard srclink="src/assets/images/ArticlesImg/img_17700666619be12b370.webp" title="طراحی UI" way="دیزاین" date="1403,خرداد"></ArticlesCard>
          </div>
          <div className="col">
            <ArticlesCard srclink="src/assets/images/ArticlesImg/img_49810666619be2799bc.webp" title="طراحی UI" way="برنامه نویسی" date="1403,خرداد"></ArticlesCard>
          </div>
          <div className="col">
            <ArticlesCard srclink="src/assets/images/ArticlesImg/img_85545166619be3d0d9d.webp" title="طراحی UI" way="دیزاین" date="1403,خرداد"></ArticlesCard>
          </div>
        </div>
      </div>
    </div>
  )
}