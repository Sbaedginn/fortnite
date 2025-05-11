import { useParams } from "react-router-dom";
import { getOrderFromLocalStorage } from "../utils/localStorageControlerOrders";
import CardProduct from "../components/CardProduct";
import { useEffect, useState } from "react";
import { getShopItemById } from "../api/fortApi";
import { normalizeProductData } from "../utils/normalizeProduct";

const OrderDetails = () => {
    const { id } = useParams()
    const order = getOrderFromLocalStorage(id)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
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
        }

        fetchProducts()
    }, [])

    return (
        <div className="order_detail">
            <h2>Numder order: {id}</h2>
            <p>Time: {order.time}</p>
            <p>TotalSumm: {order.totalSumm} V-bucks</p>
            <h3>Products: </h3>
            <div className="order_products">
                {products.map((product, index) => (
                    <CardProduct key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default OrderDetails