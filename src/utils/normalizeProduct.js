export function normalizeProductData(data) {
    return {
        mainId: data.mainId || data.id || data.itemId,
        displayName: data.displayName || data.name,
        displayAssets: data.displayAssets || [{ url: data.images?.icon }],
        price: {
            finalPrice: data.price?.finalPrice || data.price || 0
        },
        colors: data.colors || {
            color1: "#20eef8",
            color2: "#139bCb",
            color3: "#f5f5f5"
        }
    };
}