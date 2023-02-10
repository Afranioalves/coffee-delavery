import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Pages from './pages'


const App = ()=>{

  return(
    <BrowserRouter>
        <Routes>
            <Route index element={<Pages.Home/>}></Route>
            <Route path="checkout" element={<Pages.Checkout/>}></Route>
        </Routes>
    </BrowserRouter>
  )


}
export default App