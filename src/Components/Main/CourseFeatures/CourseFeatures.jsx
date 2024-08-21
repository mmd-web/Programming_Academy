import React from "react";
import TitlesMain from "../TitlesMain/TitlesMain";

function CourseFeatures () {
  return(
    <div className="w-100 h-100 py-5">
      <TitlesMain title="ویژگی دوره ها"></TitlesMain>
      <div className='w-100 h-100 mt-5'>
        <div className="row" dir="rtl">
          <div className="col">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <img src="src/assets/images/MainImage/img_7617296661ff23b9f83.webp" style={{width:'85%'}} alt="" />
            </div>
          </div>
          <div className="col bg-danger">hello</div>
        </div>
      </div>
    </div>
  )
}

export default CourseFeatures;