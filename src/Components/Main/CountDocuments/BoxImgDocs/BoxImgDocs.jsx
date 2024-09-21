import React from 'react'
import Zoom from 'react-medium-image-zoom'
import GetImg from '../../../GetImg/GetImg.jsx'
import 'react-medium-image-zoom/dist/styles.css'

export default function BoxImgDocs(props) {
  return (
    <div className='w-100 h-100 p-4 rounded-4 bg_main_two d-flex justify-content-center align-items-center'>
      <div className='bg-warning w-100 h-100 rounded-4 overflow-hidden'>
        <Zoom>
          <div className='w-100 h-100 bg-danger'>
            <img src={GetImg(props.srclink)} className='h-100 object-fit-cover' alt="" />
          </div>
        </Zoom>
      </div>
    </div>
  )
}