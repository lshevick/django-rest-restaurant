import { useState } from 'react';

const MenuItemDetail = ({}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newPrice, setNewPrice] = useState('');


    const handleNewNameChange = e => setNewName(e.target.value)
    const handleNewDescriptionChange = e => setNewDescription(e.target.value)
    const handleNewPriceChange = e => setNewPrice(e.target.value)
    const handleNewCategoryChange = e => setNewCategory(e.target.value)

    const handleSave = () => {
        
    }


    const editMenuItems = (
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
    )

    const menuItem = (
        <li key={item.id}>
            <div className="menu-item-info">
                <p>{item.category}</p>
                <p className='item-info-name'>{item.name}</p>
                <p className='item-info-description'>{item.description}</p>
            </div>
            <button type='button' onClick={() => setIsEditing(true)}>Edit</button>
            <span>${item.price}</span>
        </li>
    )


}