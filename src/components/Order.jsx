import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getShopItemById } from "../api/fortApi"
import Preloader from "./Preloader"

const Order = ({ order, n }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            const fetchedProducts = await Promise.all(
                order.idsWithCount.map(async (item) => {
                    const productData = await getShopItemById(item.productId)
                    return { ...item, productData }
                })
            )
            setProducts(fetchedProducts)
            setLoading(false)
        }

        fetchProducts()
    }, [order])

    return (
        <div className="order">
            <h3>Number order: {n}</h3>
            {loading ? (
                <Preloader />
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.productId}>
                            Name: {product.productData?.name || "Loading..."} || Count: {product.count} || ID: {product.productId}
                        </li>
                    ))}
                </ul>
            )}

            <p>Time: {order.time}</p>
            <p>TotalSumm: {order.totalSumm} V-bucks</p>
            <Link to={`/order/${n}`}>Show more</Link>
        </div >
    )
}

export default Order