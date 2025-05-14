import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProductsFromLocalStorage } from '../utils/localStorageControlerBasket'

const Header = ({ openBasket }) => {
    const [basketCount, setBasketCount] = useState(0)

    useEffect(() => {
        const updateBasketCount = () => {
            const basket = getProductsFromLocalStorage()
            setBasketCount(basket.length)
        };
    
        updateBasketCount();
    
        window.addEventListener('basketChanged', updateBasketCount)
    
        return () => {
            window.removeEventListener('basketChanged', updateBasketCount)
        };
    }, []);
    

    return (
        <header className="header">
            <div className="container header-container">
                <h1 className="logo">Fort-shop</h1>
                <nav className="nav">
                    <Link to='/' className="nav-link">Shop</Link>
                    <Link to='/basket' className="nav-link">
                    <button onClick={openBasket}>Basket</button>
                        {basketCount > 0 && (
                            <span className="basket-count">{basketCount}</span>
                        )}
                    </Link>
                    <Link to='/orders' className="nav-link">Orders</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
