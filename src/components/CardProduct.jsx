import { Link } from "react-router-dom";
import { saveProductToLocalStorage } from "../utils/localStorageControlerBasket";

const CardProduct = ({ product }) => {
    const addToBasket = () => {
        saveProductToLocalStorage(product.mainId, product?.price?.finalPrice || 0)
        window.dispatchEvent(new Event('basketChanged'));
    }

    const cardStyle = {
        backgroundColor: product.colors?.color3 || "#f5f5f5",
        color: "#ffffff",
        border: `2px solid ${product.colors?.color1 || "#20eef8"}`,
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
        maxWidth: "300px",
        textAlign: "center",
        boxShadow: `0 4px 8px ${product.colors?.color2 || "#139bCb"}40`
    };

    const priceStyle = {
        backgroundColor: product.colors?.color2 || "#139bCb",
        padding: "5px 10px",
        borderRadius: "20px",
        display: "inline-block",
        margin: "10px 0"
    };



    return (
        <div className="card_product" style={cardStyle}>
            <h3 style={{ color: product.colors?.color2 || "#20eef8" }}>{product.displayName}</h3>
            <img src={product.displayAssets?.[0]?.url} alt="" />
            <p style={priceStyle}>Price: {product.price?.finalPrice || 0} V-Bucks</p>
            <Link to={`/product/${product.mainId}`}
                style={{
                    color: product.colors?.color1 || "#20eef8",
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "inline-block",
                    marginTop: "10px"
                }}>More view details</Link>
            <button
                style={{
                    color: product.colors?.color1 || "#20eef8",
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "block",
                    marginTop: "10px",
                    background: product.colors?.color2 || "#139bCb",
                    borderRadius: "20px",
                    border: "none",
                    padding: "5px 10px",
                    margin: "15px auto 0 auto"
                }}
                onClick={addToBasket}
                >Add to basket</button>
        </div>

    )
}



export default CardProduct