import React from 'react'
import Logo from './logo';
import NavItems from './navItems';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg container-fluid container'>
      <div className='bg-dark rounded-5 py-4 text-light w-100'>
        <div className="row">
          <div className="col-10">
            <div className='d-flex flex-row justify-content-center align-items-center'>
              <NavItems></NavItems>
            </div>
          </div>
          <div className="col-2">
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