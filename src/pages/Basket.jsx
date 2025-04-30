import { useEffect, useState } from 'react'
import { getProductsFromLocalStorage } from '../utils/localStorageControler'
import { getShopItemById } from '../api/fortApi'
import ProductBasket from '../components/CardBasket'

const Basket = () => {
    const [basket, setBasket] = useState([])
    const [products, setproducts] = useState([])

    useEffect(() => {
        setBasket(getProductsFromLocalStorage())
    }, [])

    useEffect(() => {
        basket.forEach((product) => {
            const newProducts = products
            console.log();
            
            newProducts.push(getShopItemById(product.productId))
            setproducts(newProducts)
        })
        console.log(products);
        
    }, [basket])



    return (
        <>
            <h2>Basket</h2>
            {
                basket.length == 0 ?
                    (
                        <p>Basket is empty</p>
                    ) :
                    (
                        <div>
                            {
                                basket.map((product) => (
                                    <ProductBasket key={product.mainId} product={product}/>
                                ))
                            }
                        </div>
                    )
            }
        </>
    )
}

export default Basket