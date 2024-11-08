import React from 'react'
import TitlesMain from '../TitlesMain/TitlesMain'
import ArticlesCard from './ArticlesCard/ArticlesCard'
import GetImg from '../../GetImg/GetImg.jsx'
import './Articles.css'

// let valueArticlesCard = [
//   { id: 1, srcImg: ArticlesImg1, title: 'طراحی UI', way: 'برنامه نویسی', date: '1403,خرداد' },
//   { id: 2, srcImg: ArticlesImg2, title: 'طراحی UI', way: 'دیزاین', date: '1403,خرداد' },
//   { id: 3, srcImg: ArticlesImg3, title: 'طراحی UI', way: 'برنامه نویسی', date: '1403,خرداد' },
//   { id: 4, srcImg: ArticlesImg4, title: 'طراحی UI', way: 'دیزاین', date: '1403,خرداد' },
// ]

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