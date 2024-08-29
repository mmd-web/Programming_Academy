import React from "react";
import TitlesMain from "../TitlesMain/TitlesMain";
import FeatureBox from "./FeatureBox/FeatureBox";
import GetImg from '../../GetImg/GetImg.jsx';
import './CourseFeatures.css'

import FeatureImg1 from '../../../assets/images/MainImage/Feature/img_7617296661ff23b9f83.webp';
import FeatureImg2 from '../../../assets/images/MainImage/Feature/img_8225146661ff1dc8cf4.webp';
import FeatureImg3 from '../../../assets/images/MainImage/Feature/img_9115136661ff21de89c.webp';
import FeatureImg4 from '../../../assets/images/MainImage/Feature/img_7268116661ff1fb171e.webp';

function CourseFeatures() {
  return (
    <div className="w-100 h-100 py-5">
      <TitlesMain title="ویژگی دوره ها"></TitlesMain>
      <div className='w-100 h-100 mt-5'>
        <div className="row row-gap-lg-0 row-gap-5" dir="rtl">
          <div className="col-lg-6 col-12">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <img src={GetImg(FeatureImg1)} style={{ width: '85%' }} alt="" />
            </div>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-4 col-12 d-flex py-3 align-items-center justify-content-center">
            <div className="row w-100 h-100 row-gap-4">
              <div className="col-12">
                <FeatureBox srclink={GetImg(FeatureImg2)} title="تضمین کاملترین محتوا" subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."></FeatureBox>
              </div>
              <div className="col-12">
                <FeatureBox srclink={GetImg(FeatureImg3)} title="پشتیبانی دائمی" subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."></FeatureBox>
              </div>
              <div className="col-12">
                <FeatureBox srclink={GetImg(FeatureImg4)} title="پروژه محور" subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."></FeatureBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseFeatures;