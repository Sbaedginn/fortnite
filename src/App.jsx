import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'
import Basket from './pages/Basket'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/basket' element={<Basket />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
