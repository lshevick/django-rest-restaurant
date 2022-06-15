import { useState } from 'react';

const AdminView = ({ updateOrderStatus, items, prevOrder, addMenuItem }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newPrice, setNewPrice] = useState('');







    // const handleComplete = (id, bool) => {
    //      updateOrderStatus(id, bool)
    // }

    
    const handleNewNameChange = e => setNewName(e.target.value)
    const handleNewDescriptionChange = e => setNewDescription(e.target.value)
    const handleNewPriceChange = e => setNewPrice(e.target.value)
    const handleNewCategoryChange = e => setNewCategory(e.target.value)

    const handleSave = () => {
        
    }


    const editMenuItems = items.map(item => (
        <li key={item.id}>
            <div className="menu-item-info">
                <input type="text" autoComplete='off' value={newCategory} onChange={handleNewCategoryChange} placeholder={item.category} />
                <input type="text" autoComplete='off' value={newName} onChange={handleNewNameChange} placeholder={item.name} />
                <input type="text" autoComplete='off' value={newDescription} onChange={handleNewDescriptionChange} placeholder={item.description} />
            </div>
            <span>
                <input type="text" autoComplete='off' value={newPrice} onChange={handleNewPriceChange} placeholder={item.price} />
            </span>
            <button type='button' onClick={() => handleSave()}>Save</button>
            <button type='button' onClick={() => setIsEditing(false)}>Cancel</button>
        </li>
    ))

    const menuItems = items.map(item => (
        <li key={item.id}>
            <div className="menu-item-info">
                <p>{item.category}</p>
                <p className='item-info-name'>{item.name}</p>
                <p className='item-info-description'>{item.description}</p>
            </div>
            <button type='button' onClick={() => setIsEditing(true)}>Edit</button>
            <span>${item.price}</span>
        </li>
    ))

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
                    {isEditing ? editMenuItems : menuItems}
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