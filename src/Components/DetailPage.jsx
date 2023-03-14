import React from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'



const DetailPage = () => {
    const location = useLocation();
    const { title, img, description } = location.state;
    const mystyle = {
        color: "white",
        backgroundColor: "black",
        borderRadius: "8px",
        padding: '5px 20px'
    }
console.log(title)

    return (
        <div className='main'>
             <div className='single__page'>
        <h1>{title}</h1>
        <img src={img} alt="" />
        <p>{description}</p>
    </div>
        
        <Link to="/"> <button style={mystyle} >Go Home</button> </Link>
        </div>
    )
}

export default DetailPage;