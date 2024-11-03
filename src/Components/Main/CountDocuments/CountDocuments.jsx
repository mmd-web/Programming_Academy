import React from 'react'
import TitlesMain from "../TitlesMain/TitlesMain"
import BoxImgDocs from './BoxImgDocs/BoxImgDocs'
import './CountDocuments.css'

// let valueBoxImgDocs = [
//   { id: 1, srcImg: DocsImg1 },
//   { id: 2, srcImg: DocsImg1 },
//   { id: 3, srcImg: DocsImg1 },
//   { id: 4, srcImg: DocsImg1 },
//   { id: 5, srcImg: DocsImg1 },
//   { id: 6, srcImg: DocsImg1 },
//   { id: 7, srcImg: DocsImg1 },
//   { id: 8, srcImg: DocsImg1 },
// ]

export default function CountDocuments() {
  return (
    <div className='w-100 h-100 py-5 mt-3'>
      <TitlesMain title="تعدادی از مدارک اعطا شده"></TitlesMain>
      <div className='w-100 h-100 mt-5'>
        <div className="row row-gap-4">
          {/* {
            valueBoxImgDocs.map(item => {
              return (
                <div key={item.id} className="col-xl-3 col-md-6 col-12">
                  <BoxImgDocs srclink={item.srcImg}></BoxImgDocs>
                </div>
              )
            })
          } */}
        </div>
      </div>
    </div>
  )
}