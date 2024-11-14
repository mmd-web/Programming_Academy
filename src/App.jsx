import React from 'react'
import Header from './Components/Header/Header';
import MainBox from './Components/Main/MainBox';
import Footer from './Components/Footer/Footer';
import { supabase } from './API/supabase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getProductList.bind(this);
    this.getProductList();
    this.getGeneralTableList.bind(this);
    this.getGeneralTableList();
    this.getStorage.bind(this);
    this.getStorage();
    this.getArticleTableList.bind(this);
    this.getArticleTableList();
  }

  async getProductList() {
    const { data } = await supabase
      .from('products')
      .select('*')
    return data;
  }

  async getGeneralTableList() {
    const { data } = await supabase
      .from('generalTable')
      .select('*')
    return data;
  }

  async getArticleTableList() {
    const { data } = await supabase
      .from('Article')
      .select('*')
    return data;
  }

  async getStorage() {
    const { data } = await supabase
      .storage
      .from('files')
      .list('')
    return data;
  }

  render() {
    return (
      <div className='bg_main w-100 w_main_100 position-absolute'>
        <Header></Header>
        <MainBox></MainBox>
        <Footer></Footer>
      </div>
    )
  }
}
export default App;