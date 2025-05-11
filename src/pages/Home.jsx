import { useEffect, useState } from 'react'
import { getItems } from '../api/fortApi'
import CardProduct from '../components/CardProduct'
import Preloader from '../components/Preloader'

const Home = () => {
    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    
        const fetchProducts = async () => {
            setLoading(true)
            try {
                setproducts(await getItems())
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
        }
        fetchProducts()
       
    }, [])

    return (
        <main>
            <div className="container">
                {loading ? (
                    <Preloader />
                ) : (
                    <div className="product_list">
                        {
                            products.map((product) => (
                                <CardProduct key={product.mainId} product={product} />
                            ))
                        }
                    </div>
                )}

            </div>
        </main>
    )
}


export default Home 