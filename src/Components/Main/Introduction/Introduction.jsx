import React from 'react'
import TitlesMain from '../TitlesMain/TitlesMain';
import IntBox from './IntBox/IntBox';
import App from '../../../App';
import { RequiredData, saveRequired } from '../../../ConnectData/GetData';

class Introduction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      storageFile: [],
      colorBoxIntroduction : [
        {colorOne : 'rgb(253, 166, 54)' , colorTwo : 'rgb(243, 49, 90)'},
        {colorOne : 'rgb(47, 198, 227)' , colorTwo : 'rgb(40, 226, 102)'},
        {colorOne : 'rgb(26, 179, 114)' , colorTwo : 'rgb(49, 105, 135)'},
        {colorOne : 'rgb(51, 153, 253)' , colorTwo : 'rgb(152, 57, 248)'}
      ]
    }

    this.callAppComponent = new App();

    this.callProductsTable.bind(this);
    this.callProductsTable()
    this.callStorageItem.bind(this);
    this.callStorageItem()
  }

  async callProductsTable() {
    this.setState({
      products: await this.callAppComponent.getProductList()
    })
  }

  async callStorageItem() {
    this.setState({
      storageFile: await this.callAppComponent.getStorage()
    })
  }

  render() {
    RequiredData(this.state.storageFile, 'Introduction');
    return (
      <div className='w-100 h-100 py-5 px-1'>
        <TitlesMain title="معرفی دوره ها"></TitlesMain>
        <div className='w-100 h-100 mt-5'>
          <div className="row row-gap-4">
            {this.state.products &&
              this.state.products.map(item =>
                <div key={item.id} className="col-md-6 col-12">
                  {console.log(saveRequired[item.id - 1])}
                  {item.id < saveRequired.length+1 ?
                    <IntBox src={saveRequired[item.id - 1]} {...item} {...this.state.colorBoxIntroduction[item.id - 1]}></IntBox>
                    : null
                  }
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Introduction;