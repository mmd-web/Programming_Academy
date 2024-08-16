import React from 'react'
import './BtnMain.css'

function BtnMain({className , title}) {
  return (
    <div>
      <a href="#" className={className}>{title}</a>
    </div>
  )
}

export default BtnMain;