import React from 'react'
import TitlesMain from '../TitlesMain/TitlesMain';
import IntBox from './IntBox/IntBox';

function Introduction() {
  return (
    <div className='bg-danger w-100 h-100 py-5 px-1'>
      <TitlesMain title="معرفی دوره ها"></TitlesMain>
      <div className='w-100 h-100 mt-5'>
        <div className="row row-gap-4">
          <div className="col-6">
            <IntBox></IntBox>
          </div>
          <div className="col-6">
            <IntBox></IntBox>
          </div>
          <div className="col-6">
            <IntBox></IntBox>
          </div>
          <div className="col-6">
            <IntBox></IntBox>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction;