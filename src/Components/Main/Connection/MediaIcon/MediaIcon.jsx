import React from 'react'

export default function MediaIcon({...props}) {
  return (
    <a href='#' className='w_icon_media'>
      <img src={props.srclink} alt="" className='w-100 h-100' />
    </a>
  )
}
