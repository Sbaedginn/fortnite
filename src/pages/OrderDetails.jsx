import { useParams } from "react-router-dom";
import { getOrderFromLocalStorage } from "../utils/localStorageControlerOrders";
import CardProduct from "../components/CardProduct";
import { useEffect, useState } from "react";
import { getShopItemById } from "../api/fortApi";
import { normalizeProductData } from "../utils/normalizeProduct";
import Preloader from "../components/Preloader";
import '../styles/order.css'

const OrderDetails = () => {
    const { id } = useParams()
    const order = getOrderFromLocalStorage(id)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            try {
                const fetchedProducts = await Promise.all(
                    order.idsWithCount.map(async (item) => {
                        const data = await getShopItemById(item.productId)
                        return normalizeProductData(data)
                    })
                )
                setProducts(fetchedProducts)
            } catch (error) {
                console.error(error);
            }
            setLoading(false)
        }

        fetchProducts()
        
    }, [])

    return (
        <div className="order_detail container">
            <h2>Numder order: {id}</h2>
            <p>Time: {order.time}</p>
            <p>TotalSumm: {order.totalSumm} V-bucks</p>
            <h3>Products: </h3>
            {loading ? (
                <Preloader />
            ) : (
                <div className="order_products">
                    {products.map((product, index) => (
                        <CardProduct key={index} product={product} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default OrderDetails