import React from 'react'
import TitlesMain from '../TitlesMain/TitlesMain'
import MediaIcon from './MediaIcon/MediaIcon'
import AddressBox from './AddressBox/AddressBox'
import App from '../../../App'
import { RequiredData, saveRequired } from '../../../ConnectData/GetData'
import { StorageAddres } from '../Course/CardCourse/CardCourse'
import './Connection.css'

export default class Connection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      conectedValue: [],
      storageFile: []
    }

    this.callAppComponent = new App();

    this.callProductsTable.bind(this);
    this.callProductsTable()
    this.callStorageItem.bind(this);
    this.callStorageItem()
  }

  async callProductsTable() {
    this.setState({
      conectedValue: await this.callAppComponent.getGeneralTableList()
    })
  }

  async callStorageItem() {
    this.setState({
      storageFile: await this.callAppComponent.getStorage()
    })
  }

  render() {
    let conectedValuePhone = this.state.conectedValue.filter(item => item.type == 'conected');
    let conectedValue = this.state.conectedValue.filter(item => item.type == 'conectedData');
    RequiredData(this.state.storageFile, 'conected');
    let IsolationPhone = saveRequired.filter(item => item.name.includes('phone'));
    let IsolationMedia = saveRequired.filter(item => item.name.includes('ig'));

    return (
      <div className='w-100 h-100 py-5 mt-3'>
        <TitlesMain title="ارتباط با ما"></TitlesMain>
        <div className='w-100 h-100 mt-5'>
          <div className="row row-gap-lg-0 row-gap-4">
            <div className="col-lg-6 col-12">
              <div className='w-100 h-100 d-flex align-items-end'>
                <div className='w-100 bg_main_two rounded-4 py-4 px-4 d-flex justify-content-lg-between align-items-lg-end flex-lg-row flex-column justify-content-end align-items-center row-gap-lg-0 row-gap-sm-5 row-gap-3 w_box_media'>

                  <div className='w_box_img_media'>
                    {IsolationPhone[0] &&
                      <img src={`${StorageAddres}${IsolationPhone[0].name}`} className='w-100' alt="" />
                    }
                  </div>

                  <div className='w_box_text_media h-100 d-flex flex-column row-gap-4 justify-content-center' dir='rtl'>
                    {conectedValuePhone[0] &&
                      conectedValuePhone.map(item =>
                        <div className='d-flex flex-column row-gap-4 ps-3 h-100'>
                          <span className='color_white_100 fw-bold fs_Connection_title'>{item.title}</span>
                          <span className='color_white_50 lh-lg fs_Connection_subtel'>{item.subTitle}</span>
                        </div>
                      )
                    }

                    <div className='d-flex flex-row column-gap-3 h-100'>
                      {IsolationMedia[0] &&
                        IsolationMedia.map(item =>
                          <MediaIcon key={item.id} srclink={`${StorageAddres}${item.name}`}></MediaIcon>
                        )
                      }
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex flex-column row-gap-4 justify-content-end">
              {conectedValue[0] &&
                conectedValue.map(item =>
                  <AddressBox key={item.id} srclink={`${StorageAddres}${IsolationMedia[item.id - 9].name}`} title={item.title}></AddressBox>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}