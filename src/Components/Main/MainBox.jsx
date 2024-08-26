import React from 'react'
import Course from './Course/Course'
import Introduction from './Introduction/Introduction';
import CourseFeatures from './CourseFeatures/CourseFeatures';
import CountDocuments from './CountDocuments/CountDocuments';
import Articles from './Articles/Articles';
import Connection from './Connection/Connection';
import Footer from '../Footer/Footer';

function MainBox() {
  return (
    <div className='container'>
      <Course></Course>
      <Introduction></Introduction>
      <CourseFeatures></CourseFeatures>
      <CountDocuments></CountDocuments>
      <Articles></Articles>
      <Connection></Connection>
      <Footer></Footer>
    </div>
  )
}

export default MainBox;