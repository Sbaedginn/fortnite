const API_URL = 'https://fortniteapi.io/v2/'
const API_KEY = '16540c41-b83c6816-8b2f2f07-d8e16e2b'

export const getItems = async () => {
  const res = await fetch(`${API_URL}/shop?lang=en`, {
    headers: {
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
    const res = await fetch(`${API_URL}/items/get?id=${itemId}`, {
      headers: {
        Authorization: API_KEY
      }
    })
    if (!res.ok) {
      console.error('error')
    }
    const data = await res.json()
    console.log(itemId, data, data.item);
    return data.item
  } catch (error) {
    throw new Error(`Ошибка при поиске товара: ${error.message}`);
  }
}