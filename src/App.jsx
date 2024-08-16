import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetails'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'

function App() {

  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/product/:pid' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>

    </Routes>
      
    </>
  )
}

export default App
