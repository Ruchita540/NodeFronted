import React from 'react'
import './Home.css'


const ImageCard = (props) => {
  return (
    <>
        <div className='image'>< img className='image' src={props.src} alt='Error!' /></div>

        
    </>
  )
}

export default ImageCard