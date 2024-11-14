import React from 'react'
import TitlesMain from '../TitlesMain/TitlesMain'
import ArticlesCard from './ArticlesCard/ArticlesCard'
import './Articles.css'

export default function Articles() {
  return (
    <div className='w-100 h-100 py-5 mt-3'>
      <TitlesMain title="تعدادی از مدارک اعطا شده"></TitlesMain>
      <div className='w-100 h-100 mt-5'>
        <div className="row row-gap-4">
          {/* {
            valueArticlesCard.map(item => {
              return (
                <div key={item.id} className="col-xl-3 col-md-6 col-12">
                  <ArticlesCard srclink={GetImg(item.srcImg)} title={item.title} way={item.way} date={item.date}></ArticlesCard>
                </div>
              )
            })
          } */}
        </div>
      </div>
    </div>
  )
}