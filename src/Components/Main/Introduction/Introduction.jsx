import React from 'react'
import TitlesMain from '../TitlesMain/TitlesMain';
import IntBox from './IntBox/IntBox';
import GetImg from '../../GetImg/GetImg.jsx';

import IconIntroduction1 from '../../../assets/images/icon/IconIntroduction/icons8-javascript-96.png';
import IconIntroduction2 from '../../../assets/images/icon/IconIntroduction/icons8-node-js-96.png';
import IconIntroduction3 from '../../../assets/images/icon/IconIntroduction/icons8-vuejs-100.png';
import IconIntroduction4 from '../../../assets/images/icon/IconIntroduction/icons8-atom-68.png';

function Introduction() {
  return (
    <div className='w-100 h-100 py-5 px-1'>
      <TitlesMain title="معرفی دوره ها"></TitlesMain>
      <div className='w-100 h-100 mt-5'>
        <div className="row row-gap-4">
          <div className="col-md-6 col-12">
            <IntBox srclink={GetImg(IconIntroduction1)} title="JavaScript" colorOne="#FDA636" colorTwo="#F3315A"></IntBox>
          </div>
          <div className="col-md-6 col-12">
            <IntBox srclink={GetImg(IconIntroduction2)} title="NoodJs" colorOne="#2FC6E3" colorTwo="#28E266"></IntBox>
          </div>
          <div className="col-md-6 col-12">
            <IntBox srclink={GetImg(IconIntroduction3)} title="VueJs" colorOne="#1AB372" colorTwo="#316987"></IntBox>
          </div>
          <div className="col-md-6 col-12">
            <IntBox srclink={GetImg(IconIntroduction4)} title="ReactJs" colorOne="#3399FD" colorTwo="#9839F8"></IntBox>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction;