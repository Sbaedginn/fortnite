import { useEffect, useState } from 'react'
import { GetItems } from '../api/fortApi'
import CardProduct from '../components/CardProduct'

const Home = () => {
    const [products, setproducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setproducts(await GetItems())
            } catch (error) {
                console.error(error)
            }
        }
        fetchProducts()
    }, [])

    return (
       <main>
        <div className="container">
            <div className="product_list">
                {
                    products.map((product) => (
                        <CardProduct key={product.mainId} product={product} />
                    ))
                }
            </div>
        </div>
       </main>
    )
}

export default Home 