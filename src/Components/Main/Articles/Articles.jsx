import React from 'react'
import TitlesMain from '../TitlesMain/TitlesMain'
import ArticlesCard from './ArticlesCard/ArticlesCard'
import App from '../../../App';
import { StorageAddres } from '../Course/CardCourse/CardCourse';
import { RequiredData, saveRequired } from '../../../ConnectData/GetData';
import './Articles.css'

export default class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articlesData : [],
      storageFile: []
    }

    this.callAppComponent = new App();

    this.callStorageItem.bind(this);
    this.callStorageItem()
    this.callArticlesDataTable.bind(this);
    this.callArticlesDataTable()
  }

  async callArticlesDataTable(){
    this.setState({
      articlesData : await this.callAppComponent.getArticleTableList()
    })
  }

  async callStorageItem() {
    this.setState({
      storageFile: await this.callAppComponent.getStorage()
    })
  }

  render() {
    RequiredData(this.state.storageFile, 'Articles');
    return (
      <div className='w-100 h-100 py-5 mt-3'>
        <TitlesMain title="تعدادی از مدارک اعطا شده"></TitlesMain>
        <div className='w-100 h-100 mt-5'>
          <div className="row row-gap-4">
            {this.state.articlesData &&
              this.state.articlesData.map(item =>
                <div key={item.id} className="col-xl-3 col-md-6 col-12">
                  <ArticlesCard srclink={`${StorageAddres}${saveRequired[item.id - 1].name}`} {...item}></ArticlesCard>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}