import React from 'react'
import './Bollywood.css'
import {Link } from 'react-router-dom';

const Card = (props) => {
  const { imgUrl, title, description,techId } = props;
  return (
    <Link to="/DetailPage"  state={{
      title: title,
      img: imgUrl,
      description: description,
      id: techId,
  }}> 
   
    <>
    <div className='bolly-card-dis'>
        <div className='bolly-card-1'><img width='100%' src={imgUrl} alt='Error!'/></div>
        <div className='bolly-card-2'>
            <h2>{title}</h2>
            <p>{description}</p>
            
            </div>

    </div>
    <hr/>
    </>
    
    </Link>
  )
}

export default Card
