import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getShopItemById } from "../api/fortApi"

const Order = ({ order, n }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await Promise.all(
                order.idsWithCount.map(async (item) => {
                    const productData = await getShopItemById(item.productId)
                    return { ...item, productData }
                })
            )
            setProducts(fetchedProducts)
        }

        fetchProducts()
    }, [order])

    return (
        <div className="order">
            <h3>Number order: {n}</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.productId}>
                        Name: {product.productData?.name || "Loading..."} || Count: {product.count} || ID: {product.productId}
                    </li>
                ))}
            </ul>
            <p>Time: {order.time}</p>
            <p>TotalSumm: {order.totalSumm} V-bucks</p>
            <Link to={`/order/${n}`}>Show more</Link>
        </div >
    )
}

export default Order