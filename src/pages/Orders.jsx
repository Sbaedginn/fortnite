import { useEffect, useState } from 'react'
import { getOrdersFromLocalStorage } from "../utils/localStorageControlerOrders"
import Order from "../components/Order"
import '../styles/orders.css'

const Orders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        setOrders(getOrdersFromLocalStorage())
    }, [])

    return (
        <>
            <h2>Orders-list</h2>
            {
                orders.length === 0 ? (
                    <p>Orders is empty</p>
                ) : (
                    <div className='container order_container'>
                        {orders.map((order, n) => (
                            <Order
                                key={n}
                                order={order}
                                n={n}
                            />
                        ))}
                    </div>
                )
            }
        </>
    )
}


export default Orders