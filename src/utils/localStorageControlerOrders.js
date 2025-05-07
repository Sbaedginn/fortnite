export const createOrder = (idsWithCount, totalSumm) => {
    const oldOrders = JSON.parse(localStorage.getItem("orders"))
    const now = new Date()
    const hours = now.getHours().toString()
    const minutes = now.getMinutes().toString()
    const seconds = now.getSeconds().toString()
    if (oldOrders == null) {
        localStorage.setItem("orders", JSON.stringify(
            [
                {
                    idsWithCount: idsWithCount,
                    totalSumm: totalSumm,
                    time: `${hours}:${minutes}:${seconds}`
                }
            ]
        ))
    } else {
        const newOrders = oldOrders
        newOrders.push(
            {
                idsWithCount: idsWithCount,
                totalSumm: totalSumm,
                time: `${hours}:${minutes}:${seconds}`
            }
        )
        localStorage.setItem("orders", JSON.stringify(newOrders))
    }
}

export const getOrdersFromLocalStorage = () => JSON.parse(localStorage.getItem("orders")) || []
export const getOrderFromLocalStorage = (n) => JSON.parse(localStorage.getItem("orders"))[n] || []