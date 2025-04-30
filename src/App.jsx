import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'
import Basket from './pages/Basket'
import { getItems } from './api/fortApi'

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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails products={products} />} />
        <Route path='/basket' element={<Basket />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
