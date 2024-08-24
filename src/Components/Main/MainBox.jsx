import React from 'react'
import Course from './Course/Course'
import Introduction from './Introduction/Introduction';
import CourseFeatures from './CourseFeatures/CourseFeatures';
import CountDocuments from './CountDocuments/CountDocuments';
import Articles from './Articles/Articles';

function MainBox() {
  return (
    <div className='container'>
      <Course></Course>
      <Introduction></Introduction>
      <CourseFeatures></CourseFeatures>
      <CountDocuments></CountDocuments>
      <Articles></Articles>
    </div>
  )
}

export default MainBox;