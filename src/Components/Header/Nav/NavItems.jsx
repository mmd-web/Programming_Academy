import React from 'react'

export default function NavItems() {
  return (
    <div className='d-lg-flex d-none'>
      <ul className='navbar-nav column-gap-5 flex-row-reverse'>
        <li>
          <a href="#" className='nav-link text-light shadow_text'>صفحه اصلی</a>
        </li>
        <li>
          <a href="#" className='nav-link text-light shadow_text'>خدمات</a>
        </li>
        <li>
          <a href="#" className='nav-link text-light shadow_text'>فروشگاه</a>
        </li>
        <li>
          <a href="#" className='nav-link text-light shadow_text'>نمونه کارها</a>
        </li>
        <li>
          <a href="#" className='nav-link text-light shadow_text'>مقالات</a>
        </li>
        <li>
          <a href="#" className='nav-link text-light shadow_text'>ارتباط با من</a>
        </li>
      </ul>
    </div>
  )
}


