import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1>Fort-shop</h1>
                <nav>
                    <Link to='/' >Shop</Link>
                    <Link to='/basket'>Basket</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header