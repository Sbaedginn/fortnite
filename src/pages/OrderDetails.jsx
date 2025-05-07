import { useParams } from "react-router-dom";
import { getOrderFromLocalStorage } from "../utils/localStorageControlerOrders";
import CardProduct from "../components/CardProduct";

const OrderDetails = () => {
    const { id } = useParams()
    const order = getOrderFromLocalStorage(id)

    return (
        <div className="order_detail">
            <h2>Numder order: {id}</h2>
            <p>Time: {order.time}</p>
            <p>TotalSumm: {order.totalSumm} V-bucks</p>
            <h3>Products: </h3>
            <div className="order_products">
                {
                    order.idsWithCount.map((product, n) => (
                        <CardProduct key={n}/>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default OrderDetails