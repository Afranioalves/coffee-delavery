import {BrowserRouter, Routes, Route} from "react-router-dom"
import Pages from './pages'
import { Provider } from './context/cartContext'


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
export default ()=> <Provider><App /></Provider>