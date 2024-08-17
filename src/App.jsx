import React from 'react'
import Header from './Components/Header/Header';
import MainBox from './Components/Main/MainBox';

function App() {
  return (
    <div className='bg_main w-100 w_main_100 position-absolute'>
      <Header></Header>
      <MainBox></MainBox>
    </div>
  )
}

export default App ;