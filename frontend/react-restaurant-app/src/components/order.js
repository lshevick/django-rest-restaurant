import { useState } from "react";


const Order = ({ placeOrder, order, removeFromOrder, formatter }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [prevOrder, setPrevOrder] = useState([]);
    const [name, setName] = useState('');



    // const updateOrder = () => {
    //     localStorage.setItem('savedOrder', JSON.stringify(order))
    //     console.log(JSON.parse(localStorage.getItem('savedOrder')));
    //     return setPrevOrder(JSON.parse(localStorage.getItem('savedOrder')));
    // }

    const getPrevOrder = () => {
        console.log(JSON.parse(localStorage.getItem('savedOrder')))
        return setPrevOrder(JSON.parse(localStorage.getItem('savedOrder')));
    }

    const prevOrders = (
        prevOrder.map((item) => (
            <li key={item.name}>
                <p>{item.amount}  {item.name}</p>
                <span>{formatter.format(item.price)}</span>
            </li>
        ))
    )

    const totalPrices = () => {
        const prices = order.reduce((acc, item) => {
            return acc + parseFloat(item.price);
        }, 0)
        return prices;
    }


    const viewOrderItem = (
        order.map((item) => (
            <li key={item.id}>
                <p>
                    <span>{item.amount}  </span>
                    {item.name}</p>
                <span>{formatter.format(item.price)}</span>
            </li>
        ))
    )

    const editOrderItem = (
        order.map((item) => (
            <li key={item.id}>
                <p>
                    <span>{item.amount} </span>
                    {item.name}</p>
                <button type='button' onClick={() => removeFromOrder(item.id)}>Remove</button>
                <span>{formatter.format(item.price)}</span>
            </li>
        ))
    )


    const orderEdit = (
        <ul>
            {editOrderItem}
        </ul>
    )

    const orderView = (
        <ul>
            {viewOrderItem}
        </ul>
    )

    const handleNameChange = e => setName(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        if (name.trim().length === 0) {
            return;
        }
        let total = totalPrices()
        placeOrder(name, order, total)
        setName('')
    }

    return <div className="order-screen">
        <div className="order-cart">
            {isEditing ? orderEdit : orderView}
            <div className="order-total">
                <p>Order Total</p>
                <span>{formatter.format(totalPrices())}</span>
            </div>
            <div className="order-controls">
                <button className='button-edit' type="button" onClick={() => isEditing ? setIsEditing(false) : setIsEditing(true)}>Edit Order</button>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name-input"></label>
                <input id="name-input" type="text" name='name' value={name} onChange={handleNameChange} autoComplete='off' placeholder="First and Last Name" />
                <button className='button-place' type="submit">Place Order</button>
                </form>

            </div>
        </div>
        <div className="prev-order">
            <h2>Previous Order</h2>
            <button className="prev-order-button" type='button' onClick={() => getPrevOrder()}>See Previous Order</button>
            <ul>
                {prevOrders}
            </ul>
        </div>
    </div>;
}

export default Order;