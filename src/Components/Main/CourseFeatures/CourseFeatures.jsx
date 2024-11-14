import React, { Component } from 'react';
import TitlesMain from "../TitlesMain/TitlesMain";
import App from "../../../App";
import { StorageAddres } from "../Course/CardCourse/CardCourse";
import FeatureBox from './FeatureBox/FeatureBox'
import './CourseFeatures.css'


export default class CourseFeatures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      featureImg: [],
      valueFeatureBox: []
    }

    this.callAppComponent = new App();

    this.callgetGeneralTable.bind(this);
    this.callgetGeneralTable()
    this.callStorageItem.bind(this);
    this.callStorageItem();
  }

  async callgetGeneralTable() {
    this.setState({
      valueFeatureBox: await this.callAppComponent.getGeneralTableList()
    })
  }

  async callStorageItem() {
    this.setState({
      featureImg: await this.callAppComponent.getStorage()
    })
  }

  render() {
    let mainImg = this.state.featureImg.filter(item => item.name.startsWith('MainFeature'));
    let subImg = this.state.featureImg.filter(item => item.name.startsWith('Feature'));
    let valueFeatureBox = this.state.valueFeatureBox.filter(item => item.type === 'cf');

    return (
      <div className="w-100 h-100 py-5">
        <TitlesMain title="ویژگی دوره ها"></TitlesMain>
        <div className='w-100 h-100 mt-5'>
          <div className="row row-gap-lg-0 row-gap-5" dir="rtl">
            <div className="col-lg-6 col-12">
              <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                {mainImg[0] &&
                  <img src={`${StorageAddres}${mainImg[0].name}`} style={{ width: '85%' }} alt="" />
                }
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4 col-12 d-flex py-3 align-items-center justify-content-center">
              <div className="row w-100 h-100 row-gap-4">
                {valueFeatureBox &&
                  valueFeatureBox.map(item =>
                    <div key={item.id} className="col-12">
                      <FeatureBox srclink={`${StorageAddres}${subImg[item.id - 5].name}`} {...item}></FeatureBox>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}