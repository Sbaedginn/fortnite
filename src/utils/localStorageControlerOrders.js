export const createOrder = (ids, totalSumm) => {
    const oldOrders = JSON.parse(localStorage.getItem("orders"))
    if (oldOrders == null) {
        localStorage.setItem("orders", JSON.stringify())
    } else {
        
    }

}