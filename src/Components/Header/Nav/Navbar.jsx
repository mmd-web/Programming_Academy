import React from 'react'
import Logo from './logo';
import NavItems from './NavItems';
import Offcanvas from './Offcanvas';
import Close from '../../CloseBtn/Close';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg container mx-auto w_nav_90'>
      <div className='bg-dark rounded-5 py-4 color_white_100 w-100'>
        <div className="row w-100">
          <div className="col-lg-10 col-8">
            <div className='d-flex flex-row justify-content-lg-center justify-content-start align-items-center'>
              <NavItems></NavItems>
              <Offcanvas></Offcanvas>
              <Close target="offcanvas" id="offcanvasExample"></Close>
            </div>
          </div>
          <div className="col-lg-2 col-4">
            <div className='d-flex justify-content-center align-items-center'>
              <Logo></Logo>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;