import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Bollywood from './Components/Bollywood'
import Technology from './Components/Technology'
import Hollywood from './Components/Hollywood'
import Fitness from './Components/Fitness'
import Food from './Components/Food'
import Footer from './Components/Footer'
import Details from './Components/Details'
import DetailPage from './Components/DetailPage'


const App = () => {
  
  return (
    <>
    
<Details>
      <Header />
<div>
<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bollywood' element={<Bollywood />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/hollywood' element={<Hollywood />} />
        <Route path='/fitness' element={<Fitness />} />
        <Route path='/food' element={<Food />} />
            <Route path="*" element={<DetailPage/>} />

      </Routes>
</div>
<Footer />
</Details>


      

    </>
  )
}

export default App