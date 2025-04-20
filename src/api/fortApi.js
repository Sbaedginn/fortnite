const API_URL = 'https://fortniteapi.io/v2/shop?lang=en'
const API_KEY = '16540c41-b83c6816-8b2f2f07-d8e16e2b'

export const GetItems = async () => {
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