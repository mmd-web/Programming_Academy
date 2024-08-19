import React from 'react'

function TitlesMain({title}) {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <span className='fs-1 text_color_basic fw-bold'>{title}</span>
    </div>
  )
}

export default TitlesMain;