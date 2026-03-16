import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import { Route,Routes } from 'react-router-dom'
import Herosection from './Components/Herosection'
import Companies from './Components/Companies'
import Companypage from './Components/Companypage'
import { AppContext } from './context/Appcontext'


function App() {

  return (
    <div className='flex flex-col justify-center items-center pt-6'>
      <Navbar/>
  

      <Routes>
        <Route path='/' element={  <Homepage />}/>
        <Route path="/Companies" element={ <Companies/> }/>
        <Route path="/Companies/:name" element={<Companypage/>}/>
      </Routes>
      
    </div>
  )
}

export default App
