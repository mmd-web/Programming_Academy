import React from 'react'
import Course from './Course/Course'
import Introduction from './Introduction/Introduction';
import CourseFeatures from './CourseFeatures/CourseFeatures';

function MainBox() {
  return (
    <div className='container'>
      <Course></Course>
      <Introduction></Introduction>
      <CourseFeatures></CourseFeatures>
    </div>
  )
}

export default MainBox;