import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Offers from './pages/Offers'
import Support from './pages/Support'
import Login from './pages/Login'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/products" element={<Products/> } />
          <Route path="/offers" element={<Offers/> } />
          <Route path="/support" element={<Support/> } />
          <Route path="/Login" element={<Login/> } />
          
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App