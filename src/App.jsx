import { useState, useEffect } from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'
import Basket from './pages/Basket'
import { getItems } from './api/fortApi'
import Orders from './pages/Orders'
import OrderDetails from './pages/OrderDetails'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const items = await getItems();
      setProducts(items);
    };

    fetchProducts();
  }, []);

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails products={products} />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/order/:id' element={<OrderDetails />} />
      </Routes>

    </HashRouter>
  )
}

export default App
