import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/Place-order/PlaceOrder'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'

function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
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
