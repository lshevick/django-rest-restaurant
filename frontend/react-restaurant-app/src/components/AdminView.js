// import { useState } from "react"

const AdminView = ({ updateOrderStatus, items, prevOrder, formatter }) => {

    const handleComplete = (id, bool) => {
        updateOrderStatus(id, bool)

    }

    const openOrders = prevOrder.filter(order =>
        order.completed === false
    )
        .map((item) => (
            <li key={item.id}>
                <p>{item.name}</p>
                <span>${item.total}</span>
                <button type="button" name="complete" id="complete" onClick={handleComplete(item.id, true)}>Complete</button>
            </li>
        ))

    const completedOrders = prevOrder.filter(order =>
        order.completed === true
    )
        .map((item) => (
            <li key={item.id}>
                <p>{item.name}</p>
                <span>${item.total}</span>
            </li>
        ))

    const cancelledOrders = prevOrder.filter(order =>
        order.cancelled === true
    )
        .map((item) => (
            <li key={item.id}>
                <p>{item.name}</p>
                <span>${item.total}</span>
            </li>
        ))

    return (
        <div className="admin-view">
            <h1>ORDERS</h1>
            <div className="order-section">
                <h2>Open Orders</h2>
                <ul className="open-orders">
                    {openOrders}
                </ul>

                <h2>Completed Orders</h2>
                <ul>
                    {completedOrders}
                </ul>

                <h2>Cancelled Orders</h2>
                <ul>
                    {cancelledOrders}
                </ul>
            </div>
        </div>
    );
}

export default AdminView