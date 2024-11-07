import React from 'react'
import App from '../../../App';
import { StorageAddres } from '../../Main/Course/CardCourse/CardCourse';
import { RequiredData, saveRequired } from '../../../ConnectData/GetData';

export default class Logo extends React.Component {
  constructor(props) {
    super(props)

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

  render() {
    RequiredData(this.state.storageFile, 'Logo');
    return (
      <div className='d-flex justify-content-center align-items-center'>
        {saveRequired[0] && <img src={`${StorageAddres}${saveRequired[0].name}`}></img>}
      </div>
    )
  }
}

