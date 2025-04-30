import { Link } from "react-router-dom";
import { decrementProductInBasket, incrementProductInBasket, saveProductToLocalStorage } from "../utils/localStorageControler";
import { useEffect, useState } from 'react'

const CardBasket = ({ product }) => {
    const [count, setCount] = useState(product.count);

    const increment = () => {
        incrementProductInBasket(product.productId)
        setCount(count + 1)
    }
    const decrement = () => {
        decrementProductInBasket(product.productId)
        setCount(count - 1)
    }

    return (
        <div>
            {/* <h3>{products.find(item => item.id === product.productId)?.displayName}</h3> */}
            <p>Price: {product.price?.finalPrice || 0} V-Bucks</p>
            <p>Count: <button onClick={decrement}>-</button> {count} <button onClick={increment}>+</button></p>
            <button>Remove</button>
        </div>

    )
}



export default CardBasket