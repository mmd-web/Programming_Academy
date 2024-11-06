import React from 'react'
import CardCourse from './CardCourse/CardCourse';
import TitlesMain from '../TitlesMain/TitlesMain';
import { supabase } from '../../../API/supabase';
import GetImg from '../../GetImg/GetImg';
import './Course.css'

import GetStorage , { RequiredData , saveRequired } from '../../../ConnectData/GetData';

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      storageFiles: []
    }

    this.getProductList.bind(this);
    this.getProductList()
    this.getStorage.bind(this);
    this.getStorage()
  }

  async getProductList() {
    const { data } = await supabase
      .from('products')
      .select('*')
    this.setState({
      products: data
    })
  }

  getStorage(){
    GetStorage(this);
  }

  render() {
    RequiredData(this.state.storageFiles , 'course');
    
    return (
      <div className='py-5'>
        <TitlesMain title="دوره های آکادمی"></TitlesMain>
        <div className='py-3 mt-4 d-flex justify-content-center align-items-center flex-column row-gap-3'>
          <div className="row">
            {this.state.products &&
              this.state.products.map(item =>
                <div key={item.id} className="col-lg-3 col-md-4 col-12 d-md-flex d-none">
                  <CardCourse stars={3} src={saveRequired[item.id-1]} {...item}></CardCourse>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Course;