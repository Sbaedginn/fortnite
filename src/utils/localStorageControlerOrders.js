export const createOrder = (idsWithCount, totalSumm) => {
    const oldOrders = JSON.parse(localStorage.getItem("orders"))
    const now = new Date()
    const day = now.getDate().toString().padStart(2, '0')
    const month = (now.getMonth() + 1).toString().padStart(2, '0')
    const year = now.getFullYear()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    
    const dateTime = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`
    if (oldOrders == null) {
        localStorage.setItem("orders", JSON.stringify(
            [
                {
                    idsWithCount: idsWithCount,
                    totalSumm: totalSumm,
                    time: dateTime
                }
            ]
        ))
    } else {
        const newOrders = oldOrders
        newOrders.push(
            {
                idsWithCount: idsWithCount,
                totalSumm: totalSumm,
                time: dateTime
            }
        )
        localStorage.setItem("orders", JSON.stringify(newOrders))
    }
}

export const getOrdersFromLocalStorage = () => JSON.parse(localStorage.getItem("orders")) || []
export const getOrderFromLocalStorage = (n) => JSON.parse(localStorage.getItem("orders"))[n] || []