import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const navigate = useNavigate();
    const homeclick=()=>{
     navigate('/')   
    }
    const bollywoodclick=()=>{
        navigate('/bollywood')   
       }
       const technologyclick=()=>{
        navigate('/technology')   
       }
       const hollywoodclick=()=>{
        navigate('/hollywood')   
       }
       const fitnessclick=()=>{
        navigate('/fitness')   
       }
       const foodclick=()=>{
        navigate('/food')   
       }
       const hidenav=()=>{
    
       }
    return (
        <div className='navbar-head'>
            <div className='heading'>
                <span className='the'>The</span>
                <span className='sieren'>Sieren</span>
            </div>
           
            <div className='navbar'>
                <span className='navbar-span' onClick={homeclick}>Home</span>
                <span className='navbar-span' onClick={bollywoodclick}>Bollywood</span>
                <span className='navbar-span' onClick={technologyclick}>Technology</span>
                <span className='navbar-span' onClick={hollywoodclick}>Hollywood</span>
                <span className='navbar-span' onClick={fitnessclick}>Fitness</span>
                <span className='navbar-span' onClick={foodclick}>Food</span>
                <span className='hide-nav-btn' onClick={hidenav}>|||</span>
            </div>
            


        </div>
    )
}

export default Header
