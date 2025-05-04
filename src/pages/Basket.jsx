import { useEffect, useState } from 'react'
import { getProductsFromLocalStorage, removeProductFromLocalStorage } from '../utils/localStorageControler'
import { getShopItemById } from '../api/fortApi'
import ProductBasket from '../components/CardBasket'

const Basket = () => {
    const [basket, setBasket] = useState([])
    const [productDetails, setProductDetails] = useState({})
    const [totalSumm, setTotalSumm] = useState(0)

    const fetchDetails = async (products) => {
        const result = {}
        let sum = 0

        for (const item of products) {
            const productData = await getShopItemById(item.productId)
            result[item.productId] = productData
            sum += productData.price * item.count
        }

        setProductDetails(result)
        setTotalSumm(sum)
    }

    const recalculateTotal = () => {
        const products = getProductsFromLocalStorage()
        let sum = 0
        for (const item of products) {
            sum += item.price * item.count
        }
        setTotalSumm(sum)
        setBasket(products)

    }

    const removeProductFromBasket = (productId) => {
        console.log("b-remove");
        removeProductFromLocalStorage(productId)
        recalculateTotal()
    }

    useEffect(() => {
        const products = getProductsFromLocalStorage()
        setBasket(products)

        fetchDetails(products)
    }, [])

    return (
        <>
            <h2>Basket</h2>
            {
                basket.length === 0 ? (
                    <p>Basket is empty</p>
                ) : (
                    <div>
                        {basket.map((product) => (
                            <ProductBasket
                                key={product.productId}
                                basketItem={product}
                                productApi={productDetails[product.productId]}
                                recalculateTotal={recalculateTotal}
                                remove={removeProductFromBasket}
                            />
                        ))}
                        <h3>Total: {totalSumm} V-Bucks</h3>
                        <button>
                            New order</button>
                    </div>
                )
            }
        </>
    )
}

export default Basket