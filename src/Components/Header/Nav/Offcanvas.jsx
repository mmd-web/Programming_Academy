import React from 'react'
import Logo from './Logo';

function Offcanvas() {
  return (
    <div className='d-lg-none d-flex'>
      <div className="offcanvas offcanvas-start bg-dark text-light" tabindex="-1" id="offcanvasExample">
        <div className="offcanvas-header px-3">
          <Logo></Logo>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <ul className='navbar-nav flex-column row-gap-3'>
              <li>
                <a href="#" className='nav-link text-light shadow_text bg_main_two px-3 py-3 rounded-3'>صفحه اصلی</a>
              </li>
              <li>
                <a href="#" className='nav-link text-light shadow_text bg_main_two px-3 py-3 rounded-3'>خدمات</a>
              </li>
              <li>
                <a href="#" className='nav-link text-light shadow_text bg_main_two px-3 py-3 rounded-3'>فروشگاه</a>
              </li>
              <li>
                <a href="#" className='nav-link text-light shadow_text bg_main_two px-3 py-3 rounded-3'>نمونه کارها</a>
              </li>
              <li>
                <a href="#" className='nav-link text-light shadow_text bg_main_two px-3 py-3 rounded-3'>مقالات</a>
              </li>
              <li>
                <a href="#" className='nav-link text-light shadow_text bg_main_two px-3 py-3 rounded-3'>ارتباط با من</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offcanvas;