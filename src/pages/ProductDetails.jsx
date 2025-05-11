import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
    const { id } = useParams()
    const product = products.find((item) => item.mainId == id)
    const detailStyle = {
        backgroundColor: product.colors?.color3 || "#06499e",
        color: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "850px",
        margin: "20px auto",
        border: `3px solid ${product.colors?.color1 || "#20eef8"}`
    };
    const sectionStyle = {
        backgroundColor: product.colors?.color2 || "#139bCb",
        padding: "10px",
        borderRadius: "5px",
        margin: "10px 0"
    };
    return (
        <div style={detailStyle}>
            <h1 style={{ color: product.colors?.color2 || "#20eef8" }}>{product.displayName}</h1>
            <div className="detail" style={{
                display: "flex",
                gap: "15px"
            }}>
                <div className="left" style={{
                    width: "65%"
                }}>
                    <img 
                        src={product.displayAssets?.[0]?.full_background || product.displayAssets?.[0]?.url}
                        alt={product.displayName}
                        style={{ maxWidth: "100%", borderRadius: "8px" }}
                        
                    />
                </div>
                <div className="right" style={{
                    flexGrow: "1"
                }}>
                    <div style={sectionStyle}>
                        <h3>Description</h3>
                        <p>{product.displayDescription || "Not descripton"}</p>
                    </div>
                    <div style={sectionStyle}>
                        <h3>Details</h3>
                        <p>Type: {product.displayType || product.mainType}</p>
                        <p>Rarity: {product.rarity?.name || "None"}</p>
                        <p>Price: {product.price?.finalPrice || "0"} V-Bucks</p>
                    </div>
                    {product.granted && product.granted.length > 0 && (
                        <div style={sectionStyle}>
                            <h3>Includes: </h3>
                            <ul>
                                {product.granted.map((item, index) => (
                                    <li key={index}>{item.name} ({item.type.name})</li>
                                ))}

                            </ul>
                        </div>
                    )}
                </div>
            </div>


        </div>
    )
}


export default ProductDetails