import React from 'react'
import TitlesMain from '../TitlesMain/TitlesMain'
import MediaIcon from './MediaIcon/MediaIcon'
import './Connection.css'

export default function Connection() {
  return (
    <div className='w-100 h-100 py-5 mt-3'>
      <TitlesMain title="ارتباط با ما"></TitlesMain>
      <div className='w-100 h-100 mt-5'>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className='w-100 h-100 d-flex align-items-end'>
              <div className='w-100 bg_main_two rounded-4 py-4 px-4 d-flex justify-content-lg-between align-items-lg-end flex-lg-row flex-column justify-content-end align-items-center row-gap-lg-0 row-gap-sm-5 row-gap-3 w_box_media'>
                <div className='w_box_img_media'>
                  <img src="src/assets/images/ConnectionImg/img_8989166661eb35db767.webp" className='w-100' alt="" />
                </div>
                <div className='w_box_text_media h-100 d-flex flex-column row-gap-4 justify-content-center' dir='rtl'>
                  <div className='d-flex flex-column row-gap-4 ps-3 h-100'>
                    <span className='color_white_100 fw-bold fs_Connection_title'>ما را در شبکه های اجتماعی دنبال کنید.</span>
                    <span className='color_white_50 lh-lg fs_Connection_subtel'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
                  </div>
                  <div className='d-flex flex-row column-gap-3 h-100'>
                    <MediaIcon srclink="src/assets/images/icon/IconMedia/telegram-icon.png"></MediaIcon>
                    <MediaIcon srclink="src/assets/images/icon/IconMedia/ig-instagram-icon.png"></MediaIcon>
                    <MediaIcon srclink="src/assets/images/icon/IconMedia/linkedin-app-icon.png"></MediaIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 bg-light">hello</div>
        </div>
      </div>
    </div>
  )
}