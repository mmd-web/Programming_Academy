import React from 'react'
import TitlesMain from '../TitlesMain/TitlesMain';
import IntBox from './IntBox/IntBox';

function Introduction() {
  return (
    <div className='w-100 h-100 py-5 px-1'>
      <TitlesMain title="معرفی دوره ها"></TitlesMain>
      <div className='w-100 h-100 mt-5'>
        <div className="row row-gap-4">
          <div className="col-md-6 col-12">
            <IntBox srclink="src/assets/images/icon/IconIntroduction/icons8-javascript-96.png" title="JavaScript" colorOne="#FDA636" colorTwo="#F3315A"></IntBox>
          </div>
          <div className="col-md-6 col-12">
            <IntBox srclink="src/assets/images/icon/IconIntroduction/icons8-node-js-96.png" title="NoodJs" colorOne="#2FC6E3" colorTwo="#28E266"></IntBox>
          </div>
          <div className="col-md-6 col-12">
            <IntBox srclink="src/assets/images/icon/IconIntroduction/icons8-vuejs-100.png" title="VueJs" colorOne="#1AB372" colorTwo="#316987"></IntBox>
          </div>
          <div className="col-md-6 col-12">
            <IntBox srclink="src/assets/images/icon/IconIntroduction/icons8-atom-68.png" title="ReactJs" colorOne="#3399FD" colorTwo="#9839F8"></IntBox>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction;