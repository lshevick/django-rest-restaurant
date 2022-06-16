import { useState } from 'react';

const OrderItemDetail = ({ id, name, items, total, completed, cancelled, updateOrderStatus }) => {
    const [complete, setComplete] = useState(completed)


    return <li>
        <div className="item-info">
            <p>{name}</p>
            <span>${total}</span>
        </div>
        <input
        id='toggle'
            type="checkbox"
            selected={completed}
            onChange={() => {
                setComplete(!complete);
                updateOrderStatus(id, !complete);
            }}
        />
        <div className='complete-button-wrapper'>
        <label className='completed-button' htmlFor="toggle">Completed</label>
        </div>

    </li>
}

export default OrderItemDetail