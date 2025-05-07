import { Link } from "react-router-dom"
import { getShopItemById } from "../api/fortApi"

const Order = ({ order, n }) => {
    return (
        <div className="order">
            <h3>Numder order: {n}</h3>
            <ul>
                {
                    order.idsWithCount.map((product) => (
                        <li>Name: {JSON.stringify(getShopItemById(product.productId).name)} || Count: {product.count} || {product.productId}</li>
                    )
                    )
                }
            </ul>
            <p>Time: {order.time}</p>
            <p>TotalSumm: {order.totalSumm} V-bucks</p>
            <Link to={`/order/${n}`}>Show more</Link>
        </div>
    )
}

export default Order 