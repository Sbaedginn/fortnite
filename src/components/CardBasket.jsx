import { useState } from 'react'
import { decrementProductInBasket, incrementProductInBasket } from "../utils/localStorageControlerBasket";

const CardBasket = ({ basketItem, productApi, recalculateTotal, remove }) => {
    const [count, setCount] = useState(basketItem.count)

    const increment = () => {
        incrementProductInBasket(basketItem.productId)
        setCount(count + 1)
        recalculateTotal()
    }

    const decrement = () => {
        if (count == 1) {
            const isConf = confirm("Do you want to delete it?")
            if (isConf) {
                productRemove()
            }
        } else {
            decrementProductInBasket(basketItem.productId)
            setCount(count - 1)
            recalculateTotal()
        }
    }

    const productRemove = () => {
        console.log("c-remove");

        remove(productApi.id)
    }

    return (
        <div className="card-basket">
            <h3>{productApi?.name}</h3>
            <p>Price: {productApi?.price || 0} V-Bucks</p>
            <p>
                Count:
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>
            </p>
            <button className="remove-button" onClick={productRemove}>Remove</button>
        </div>
    )    
}

export default CardBasket