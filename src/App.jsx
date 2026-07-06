import React, { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Offers from './pages/Offers'
import Support from './pages/Support'
import Login from './pages/Login'

const App = () => {
  let [userName, setUserName] = useState(null);

  let s = useCallback(()=>{
    setUserName()
  })

  return (
    <>
      <BrowserRouter>
        <Navbar userName={userName} />
        
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/products" element={<Products/> } />
          <Route path="/offers" element={<Offers/> } />
          <Route path="/support" element={<Support/> } />
          <Route path="/Login" element={<Login s={setUserName} /> } />
          
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App