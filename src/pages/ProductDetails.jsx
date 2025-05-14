import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getShopItemById } from "../api/fortApi";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const item = await getShopItemById(id);
                setProduct(item);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
    if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
    if (!product) return <p style={{ textAlign: "center" }}>Product not found</p>;

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
            <div className="detail" style={{ display: "flex", gap: "15px" }}>
                <div className="left" style={{ width: "65%" }}>
                    <img
                        src={product.displayAssets?.[0]?.full_background || product.displayAssets?.[0]?.url}
                        alt={product.displayName}
                        style={{ maxWidth: "100%", borderRadius: "8px" }}
                    />
                </div>
                <div className="right" style={{ flexGrow: "1" }}>
                    <div style={sectionStyle}>
                        <h3>Description</h3>
                        <p>{product.displayDescription || "No description available"}</p>
                    </div>
                    <div style={sectionStyle}>
                        <h3>Details</h3>
                        <p>Type: {product.displayType || product.mainType}</p>
                        <p>Rarity: {product.rarity?.name || "None"}</p>
                        <p>Price: {product.price?.finalPrice || "0"} V-Bucks</p>
                    </div>
                    {product.granted?.length > 0 && (
                        <div style={sectionStyle}>
                            <h3>Includes:</h3>
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
    );
};

export default ProductDetails;
