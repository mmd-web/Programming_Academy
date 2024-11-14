import React from 'react'
import TitlesMain from "../TitlesMain/TitlesMain"
import BoxImgDocs from './BoxImgDocs/BoxImgDocs'
import App from '../../../App'
import { RequiredData , saveRequired } from '../../../ConnectData/GetData'
import './CountDocuments.css'
import { StorageAddres } from '../Course/CardCourse/CardCourse'

export default class CountDocuments extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      storageFile : []
    }

    this.callAppComponent = new App();

    this.callStorageItem.bind(this);
    this.callStorageItem()
  }

  async callStorageItem(){
    this.setState({
      storageFile : await this.callAppComponent.getStorage()
    })
  }

  render(){
    RequiredData(this.state.storageFile , 'doc')
    return (
      <div className='w-100 h-100 py-5 mt-3'>
        <TitlesMain title="تعدادی از مدارک اعطا شده"></TitlesMain>
        <div className='w-100 h-100 mt-5'>
          <div className="row row-gap-4">
            {saveRequired && 
              saveRequired.map(item => {
                return (
                  <div key={item.id} className="col-xl-3 col-md-6 col-12">
                    <BoxImgDocs srclink={`${StorageAddres}${item.name}`}></BoxImgDocs>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}