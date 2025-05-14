import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'
import Basket from './pages/Basket'
import { getItems } from './api/fortApi'
import Orders from './pages/Orders'
import OrderDetails from './pages/OrderDetails'
import Modal from './components/Modal'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [isBasketOpen, setIsBasketOpen] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      const items = await getItems()
      setProducts(items)
    }
    fetchProducts()
  }, [])

  return (
    <BrowserRouter>
      <Header openBasket={() => setIsBasketOpen(true)} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails products={products} />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/order/:id' element={<OrderDetails />} />
      </Routes>

      <Modal isOpen={isBasketOpen} onClose={() => setIsBasketOpen(false)}>
        <Basket close={() => setIsBasketOpen(false)} />
      </Modal>
    </BrowserRouter>
  )
}

export default App
