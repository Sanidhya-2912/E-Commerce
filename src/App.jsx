import React from 'react'
import {Link, Route,Routes} from "react-router-dom"
import Home from './Components/Home'
import Details from './Components/Details'
const App = () => {
  return (
    <div className='h-screen w-screen flex '>
      <Link to="/"className='absolute left-[17%] top-[3%]'>Home</Link>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Details/:id" element={<Details/>} />
      </Routes>
     
     
    </div>
    
  )
}

export default App;
