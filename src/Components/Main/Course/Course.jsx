import React from 'react'
import CardCourse from './CardCourse/CardCourse';
import TitlesMain from '../TitlesMain/TitlesMain';
import { supabase } from 'API/supabase';
import './Course.css'
class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }

    this.getProductList.bind(this);
    this.getProductList()
  }

  async getProductList() {
    const { data } = await supabase
      .from('products')
      .select('*')
    this.setState({
      products: data
    })
  }

  render() {
    this.state.products.map(item => console.log(item))

    return (
      <div className='py-5'>
        <TitlesMain title="دوره های آکادمی"></TitlesMain>
        <div className='py-3 mt-4 d-flex justify-content-center align-items-center flex-column row-gap-3'>
          <div className="row">
            {this.state.products &&
              this.state.products.map(item =>
                <div key={item.id} className="col-lg-3 col-md-4 col-12 d-md-flex d-none">
                  <CardCourse stars={3} {...item}></CardCourse>
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