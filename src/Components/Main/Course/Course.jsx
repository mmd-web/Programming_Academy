import React from 'react'
import CardCourse from './CardCourse/CardCourse';
import TitlesMain from '../TitlesMain/TitlesMain';
import App from '../../../App';
import {RequiredData , saveRequired} from '../../../ConnectData/GetData'
import './Course.css'

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      storageFile : []
    }
    this.callProductsTable.bind(this);
    this.callProductsTable()
    this.callStorageItem.bind(this);
    this.callStorageItem()
  }

  async callProductsTable(){
    const productsData = await new App();
    this.setState({
      products : await productsData.getProductList()
    })
  }

  async callStorageItem(){
    const storage = await new App()
    this.setState({
      storageFile : await storage.getStorage()
    })
  }

  render() {
    RequiredData(this.state.storageFile , 'course');
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