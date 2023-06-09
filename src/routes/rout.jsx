import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Firstpage from '../pages/firstpages/firstpage'
import Secondpage from '../pages/secondpage/secondpage'
export default function rout() {
  return (
    <BrowserRouter>
          <Routes>
                 <Route path='/' element={<Firstpage/>}  />
                 <Route path='/products' element={<Secondpage/>}/>
          </Routes>
    </BrowserRouter>
  )
}
