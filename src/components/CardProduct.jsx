const CardProduct = ({product}) => {
    return (
        <div className="card_product">
            <h3>{product.displayName}</h3>
            <img src={product.displayAssets?.[0]?.url} alt="" />
            <p>Price: {product.price?.finalPrice || 0} vi-baks</p>
        </div>
        
    )
}

export default CardProduct