import React from 'react'

export default function GetImg(img) {
  return (
    new URL( img , import.meta.url).href
  ) 
}