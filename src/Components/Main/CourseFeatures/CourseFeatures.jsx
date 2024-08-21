import React from "react";
import TitlesMain from "../TitlesMain/TitlesMain";
import FeatureBox from "./FeatureBox/FeatureBox";

function CourseFeatures() {
  return (
    <div className="w-100 h-100 py-5">
      <TitlesMain title="ویژگی دوره ها"></TitlesMain>
      <div className='w-100 h-100 mt-5'>
        <div className="row" dir="rtl">
          <div className="col">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <img src="src/assets/images/MainImage/Feature/img_7617296661ff23b9f83.webp" style={{ width: '85%' }} alt="" />
            </div>
          </div>
          <div className="col d-flex py-3 align-items-center justify-content-center">
            <div className="row w-100 h-100 row-gap-4">
              <div className="col-12">
                <FeatureBox srclink="src/assets/images/MainImage/Feature/img_8225146661ff1dc8cf4.webp" title="تضمین کاملترین محتوا" subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."></FeatureBox>
              </div>
              <div className="col-12">
                <FeatureBox srclink="src/assets/images/MainImage/Feature/img_9115136661ff21de89c.webp" title="پشتیبانی دائمی" subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."></FeatureBox>
              </div>
              <div className="col-12">
                <FeatureBox srclink="src/assets/images/MainImage/Feature/img_7268116661ff1fb171e.webp" title="پروژه محور" subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."></FeatureBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseFeatures;