import React from 'react'

export default function NavItems() {
  return (
    <div className='d-lg-flex d-none'>
      <ul className='navbar-nav column-gap-5 flex-row-reverse'>
        <li className='nav-item'>
          <a href="#" className='nav-link text-light'>صفحه اصلی</a>
        </li>
        <li>
          <a href="#" className='nav-link text-light'>خدمات</a>
        </li>
        <li>
          <a href="#" className='nav-link text-light'>فروشگاه</a>
        </li>
        <li>
          <a href="#" className='nav-link text-light'>نمونه کارها</a>
        </li>
        <li>
          <a href="#" className='nav-link text-light'>مقالات</a>
        </li>
        <li>
          <a href="#" className='nav-link text-light'>ارتباط با من</a>
        </li>
      </ul>
    </div>
  )
}


