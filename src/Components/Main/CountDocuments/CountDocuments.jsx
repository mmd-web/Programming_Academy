import React from 'react'
import TitlesMain from "../TitlesMain/TitlesMain"
import BoxImgDocs from './BoxImgDocs/BoxImgDocs'
import './CountDocuments.css'

export default function CountDocuments() {
  return (
    <div className='w-100 h-100 py-5 mt-3'>
      <TitlesMain title="تعدادی از مدارک اعطا شده"></TitlesMain>
      <div className='w-100 h-100 mt-5'>
        <div className="row row-gap-4">
          <div className="col-xl-3 col-md-6 col-12">
            <BoxImgDocs srclink=""></BoxImgDocs>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <BoxImgDocs srclink=""></BoxImgDocs>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <BoxImgDocs srclink=""></BoxImgDocs>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <BoxImgDocs srclink=""></BoxImgDocs>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <BoxImgDocs srclink=""></BoxImgDocs>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <BoxImgDocs srclink=""></BoxImgDocs>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <BoxImgDocs srclink=""></BoxImgDocs>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <BoxImgDocs srclink=""></BoxImgDocs>
          </div>
        </div>
      </div>
    </div>
  )
}