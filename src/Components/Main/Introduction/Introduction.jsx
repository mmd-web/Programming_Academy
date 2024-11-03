import React from 'react'
import TitlesMain from '../TitlesMain/TitlesMain';
import IntBox from './IntBox/IntBox';
import GetImg from '../../GetImg/GetImg.jsx';

// let valuesInBox = [
//   { id: 1, srcImg: IconIntroduction1, title: 'JavaScript', colorOne: '#FDA636', colorTwo: '#F3315A' },
//   { id: 2, srcImg: IconIntroduction2, title: 'NoodJs', colorOne: '#2FC6E3', colorTwo: '#28E266' },
//   { id: 3, srcImg: IconIntroduction3, title: 'VueJs', colorOne: '#1AB372', colorTwo: '#316987' },
//   { id: 4, srcImg: IconIntroduction4, title: 'ReactJs', colorOne: '#3399FD', colorTwo: '#9839F8' },
// ]

function Introduction() {
  return (
    <div className='w-100 h-100 py-5 px-1'>
      <TitlesMain title="معرفی دوره ها"></TitlesMain>
      <div className='w-100 h-100 mt-5'>
        <div className="row row-gap-4">
          {/* {
            valuesInBox.map(item => {
              return (
                <div key={item.id} className="col-md-6 col-12">
                  <IntBox srclink={GetImg(item.srcImg)} title={item.title} colorOne={item.colorOne} colorTwo={item.colorTwo}></IntBox>
                </div>
              )
            })
          } */}
        </div>
      </div>
    </div>
  )
}

export default Introduction;