import React from 'react'
import TitlesMain from '../TitlesMain/TitlesMain'
import MediaIcon from './MediaIcon/MediaIcon'
import AddressBox from './AddressBox/AddressBox'
import './Connection.css'

export default function Connection() {
  return (
    <div className='w-100 h-100 py-5 mt-3'>
      <TitlesMain title="ارتباط با ما"></TitlesMain>
      <div className='w-100 h-100 mt-5'>
        <div className="row row-gap-lg-0 row-gap-4">
          <div className="col-lg-6 col-12">
            <div className='w-100 h-100 d-flex align-items-end'>
              <div className='w-100 bg_main_two rounded-4 py-4 px-4 d-flex justify-content-lg-between align-items-lg-end flex-lg-row flex-column justify-content-end align-items-center row-gap-lg-0 row-gap-sm-5 row-gap-3 w_box_media'>
                <div className='w_box_img_media'>
                  {/* <img src={GetImg(ConnectionImg)} className='w-100' alt="" /> */}
                </div>
                <div className='w_box_text_media h-100 d-flex flex-column row-gap-4 justify-content-center' dir='rtl'>
                  <div className='d-flex flex-column row-gap-4 ps-3 h-100'>
                    <span className='color_white_100 fw-bold fs_Connection_title'>ما را در شبکه های اجتماعی دنبال کنید.</span>
                    <span className='color_white_50 lh-lg fs_Connection_subtel'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
                  </div>
                  <div className='d-flex flex-row column-gap-3 h-100'>
                    {/* {
                      valueMediaIcon.map(item => {
                        return(
                          <MediaIcon key={item.id} srclink={GetImg(item.srcImg)}></MediaIcon>
                        )
                      })
                    } */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 d-flex flex-column row-gap-4 justify-content-end">
            {/* {
              valueAddressBox.map(item => {
                return(
                  <AddressBox key={item.id} srclink={GetImg(item.srcImg)} title={item.title}></AddressBox>
                )
              })
            } */}
          </div>
        </div>
      </div>
    </div>
  )
}