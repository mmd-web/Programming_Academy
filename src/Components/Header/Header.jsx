import React from 'react';
import Navbar from './Nav/Navbar';
import HrContent from './HrContent/HrContent';

function Header() {
  return (
    <header className='w-100 rounded-5 d-flex justify-content-center align-items-center'>
        <Navbar></Navbar>
        <HrContent></HrContent>
    </header>
  )
}

export default Header;