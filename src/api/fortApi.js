const API_URL = 'https://fortniteapi.io/v2/shop?lang=en'
const API_KEY = '16540c41-b83c6816-8b2f2f07-d8e16e2b'

export const getItems = async () => {
    const res = await fetch(API_URL, {
        headers:{
            Authorization: API_KEY
        }
    })
    if (!res.ok) {
        console.error('error')
    }
    const data = await res.json() 
    return data.shop
}
export async function getShopItemById(itemId) {
    try {
      const shopItems = await getItems();
      console.log("fan");

    //   for (const section of shopItems) {
    //     console.log("for");
        
    //     if (section.items) {
    //       const foundItem = section.items.find(item => item.id === itemId);
    //       if (foundItem) {
    //         return foundItem;
    //       }
    //     }
    //   }

    return shopItems.find(item => item.id === itemId)
      
      throw new Error(`Товар с ID ${itemId} не найден`);
    } catch (error) {
      throw new Error(`Ошибка при поиске товара: ${error.message}`);
    }
  }