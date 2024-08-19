import React from 'react'
import Course from './Course/Course'
import Introduction from './Introduction/Introduction';

function MainBox() {
  return (
    <div className='container'>
      <Course></Course>
      <Introduction></Introduction>
    </div>
  )
}

export default MainBox;