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
            <p>Time: {order.time}</p>
            {loading ? (
                <Preloader />
            ) : (

                
                <table className="order_table">
                    <thead>
                        
                        <tr>
                            <th>Product ID</th>
                            <th>Count</th>
                            <th>Product</th>
                        </tr>
                    </thead>
                    <tbody>{products.map((product) => (
                        <tr key={product.productId}>
                            <td>{product.productId}</td>
                            <td>{product.count}</td>
                            <td>{product.productData?.name || "Loading..."}</td>
                        </tr>

                    ))}</tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='2'>Total: </td>
                            <td>{order.totalSumm} V-bucks</td>
                        </tr>
                    </tfoot>

                </table>

            )}

            <Link to={`/order/${n}`} className="order_link">Show more</Link>
        </div >
    )
}

export default Order