import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/Place-order/PlaceOrder'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order-place' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />

    </>
  )
}

export default App
