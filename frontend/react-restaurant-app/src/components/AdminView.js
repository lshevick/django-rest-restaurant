import { useState } from 'react';
import MenuItemDetail from './MenuItemDetail';

const AdminView = ({ updateOrderStatus, items, prevOrder, addMenuItem, editMenuItem }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const openOrders =
        prevOrder.map((item) => (
            <li key={item.id}>
                <div className="item-info">
                    <p>{item.name}</p>
                    <span>${item.total}</span>
                </div>
                <button type="button" name="complete" id="complete" >Complete</button>
            </li>
        ))

    const menuItemsList = items.map(item => <MenuItemDetail
            key={item.id} {...item}
            editMenuItem={editMenuItem}
        />)


    const handleNameChange = e => setName(e.target.value)
    const handleDescriptionChange = e => setDescription(e.target.value)
    const handlePriceChange = e => setPrice(e.target.value)
    const handleCategoryChange = e => setCategory(e.target.value)

    const handleSubmit = e => {
        e.preventDefault();
        if (name.trim().length === 0) {
            return;
        }
        addMenuItem(name, description, price, category)
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
        console.log(items)
    }

    return (
        <div className="admin-view">
            <div className="order-section">
                <h1>Orders</h1>
                <h2>Open Orders</h2>
                <ul className="open-orders">
                    {openOrders}
                </ul>

            </div>

            <div className="menu-item-section">
                <h1>Menu</h1>
                <ul>
                    {menuItemsList}
                </ul>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="item-name"></label>
                    <input id="item-name" type="text" autoComplete='off' value={name} onChange={handleNameChange} placeholder='Name' />
                    <label htmlFor="item-description"></label>
                    <input id="item-description" type="text" autoComplete='off' value={description} onChange={handleDescriptionChange} placeholder='Description' />
                    <label htmlFor="item-price"></label>
                    <input id="item-price" type="text" autoComplete='off' value={price} onChange={handlePriceChange} placeholder='Price' />
                    <label htmlFor="item-category"></label>
                    <input id="item-category" type="text" autoComplete='off' value={category} onChange={handleCategoryChange} placeholder='Category' />
                    <button type='submit'>Add New Item</button>
                </form>
            </div>
        </div>
    );
}

export default AdminView