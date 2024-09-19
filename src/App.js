import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Logincomp from './Components/Logincomp'
import Signincomp from './Components/Signincomp'
import Landingcomp from './Components/Landingcomp'
import DailyUpdates from './Components/DailyUpdates'
import Weather from './Components/Weather'
import Todo from './Components/Todo'

const App = () => {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Logincomp/>}></Route>
        <Route path='/signup' element={<Signincomp/>}></Route>
        <Route path='/landing' element={<Landingcomp/>}></Route>
        <Route path='/news' element={<DailyUpdates></DailyUpdates>}></Route>
        <Route path='/weather' element={<Weather/>}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

