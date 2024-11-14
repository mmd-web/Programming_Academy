import React from 'react'
import App from '../../App'
import { StorageAddres } from '../Main/Course/CardCourse/CardCourse'
import { RequiredData , saveRequired } from '../../ConnectData/GetData'
import './Footer.css'

export default class Footer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      storageFile: []
    }

    this.callAppComponent = new App();

    this.callStorageItem.bind(this);
    this.callStorageItem()
  }

  async callStorageItem() {
    this.setState({
      storageFile: await this.callAppComponent.getStorage()
    })
  }

  render(){
    RequiredData(this.state.storageFile , 'TrustLogo');
    return (
      <div className='w-100 py-5 bg_main_two d-flex justify-content-center align-items-center' dir='rtl'>
        <div className='w-75 d-flex align-items-center flex-column row-gap-5'>
          <div className="row w-100 row-gap-0 row-gap-4">
            <div className="col-lg-6 col-12">
              <div className='d-flex flex-column justify-content-center align-items-start row-gap-3 w-75'>
                <span className='fw-bold fs-4 color_white_100'>درباره ما</span>
                <span className='fw-bold fs-6 color_white_50 lh-lg'>دارا یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند.</span>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex align-items-center">

              <div className='w-25 d-flex column-gap-4'>
                {saveRequired[0] && 
                  saveRequired.map(item => 
                    <img src={`${StorageAddres}${item.name}`} style={{width:'100%'}} alt="" />
                  )
                }
              </div>
              
            </div>
          </div>
          <div className='w-100 d-flex justify-content-center align-items-center'>
            <span className=' color_white_50'>کلیه حقوق متعلق به دارا میباشد</span>
          </div>
        </div>
      </div>
    )
  }
}
