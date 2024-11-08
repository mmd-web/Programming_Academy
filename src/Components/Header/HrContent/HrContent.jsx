import React from 'react';
import BtnMain from '../../BtnMain/BtnMain';
import CardHr from './CardHr/CardHr';
import App from '../../../App';
import { RequiredData, saveRequired } from '../../../ConnectData/GetData';
import { StorageAddres } from '../../Main/Course/CardCourse/CardCourse';
import './HrContent.css';

class HrContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storageFile: []
    }
    this.callStorageItem.bind(this);
    this.callStorageItem()
  }

  async callStorageItem() {
    const storage = await new App()
    this.setState({
      storageFile: await storage.getStorage()
    })
  }

  callRequiredDataForMainImgHr(){
    RequiredData(this.state.storageFile, 'header');
    const data = saveRequired;
    return data
  }

  callRequiredDataForImgHeaderData(){
    RequiredData(this.state.storageFile, 'header2');
    const data = saveRequired;
    return data
  }

  render() {
    let mainHrImg = this.callRequiredDataForMainImgHr().filter(item => item.name.startsWith('header1'));
    let dataHrImg = this.callRequiredDataForImgHeaderData().filter(item => item.name.startsWith('header2'));

    function callMainHrImg(){
      if (mainHrImg) {
        return mainHrImg.map(item => `${StorageAddres}${item.name}`)
      }else{
        return false;
      }
    }

    function callDataHrImg(){
      if (dataHrImg) {
        return dataHrImg.map(item => {
          return (
            <div key={item.id} className="col-xl-3 col-md-6 col-12 h-100">
              {/* <CardHr images={GetImg(item.imgSrc)} count={item.count} colorText={item.color} title={item.title} ></CardHr> */}
              <CardHr images={`${StorageAddres}${item.name}`}></CardHr>
            </div>
          )
        })
      }else{
        return false;
      }
    }

    return (
      <div className='w-100 h-100 container'>
        <div className='h_50'>
          <div className="row h-100">
            <div className="col-lg-6 col-12 d-flex d-lg-none justify-content-center align-items-center">
              <div>
                <img src={callMainHrImg()} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-12 justify-content-center mt_lg px_lg align-items-end d-flex flex-column">
              <div className='d-flex h-75 justify-content-end align-items-end flex-column row-gap-3'>
                <h1 className='text_color_basic fw-bold' dir='rtl'>آکادمی برنامه نویسی دارا</h1>
                <span className='mt-4 color_white_100 fs-2 fw-bold'>آیدین آسرایی</span>
                <span dir='rtl' className='color_white_50 fs-5 mb-5'>با من ، علم برنامه نویسی رو راحت یاد بگیر و پیشرفت کن.</span>
              </div>
              <div className='w-100 h-25 d-flex justify-content-start align-items-start flex-row-reverse column-gap-3'>
                <BtnMain className="btn bg_basic text_color_balck w_btn_main py-2 px_btn_main fw-bold" title="ارتباط با من" />
                <BtnMain className="btn bg_basic_outline w_btn_main py-2 px_btn_main fw-bold" title="دوره های من" />
              </div>
            </div>
            <div className="col-lg-6 d-lg-flex d-none justify-content-center align-items-center">
              <div>
                <img src={callMainHrImg()} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='h_25 pb_items_box'>
          <div className='row h_maxContent row-gap-3'>
            {callDataHrImg()}
          </div>
        </div>
      </div>
    )
  }
}

export default HrContent;