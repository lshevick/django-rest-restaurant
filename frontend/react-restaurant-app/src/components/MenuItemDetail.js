import { useState } from 'react';

const MenuItemDetail = ({ id, name, category, description, price, editMenuItem }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newCategory, setNewCategory] = useState(category);
    const [newDescription, setNewDescription] = useState(description);
    const [newPrice, setNewPrice] = useState(price);


    const handleNewNameChange = e => setNewName(e.target.value)
    const handleNewDescriptionChange = e => setNewDescription(e.target.value)
    const handleNewPriceChange = e => setNewPrice(e.target.value)
    const handleNewCategoryChange = e => setNewCategory(e.target.value)

    const handleSave = () => {
        editMenuItem(id, newName, newDescription, newPrice, newCategory)
        setNewName(newName)
        setNewCategory(newCategory)
        setNewDescription(newDescription)
        setNewPrice(newPrice)
        setIsEditing(false)
    }


    const editMenuItems = (
        <li key={id}>
            <div className="menu-item-info">
                <input type="text" autoComplete='off' name={category} id={category} value={newCategory} onChange={handleNewCategoryChange} />
                <input type="text" autoComplete='off' name={name} id={name} value={newName} onChange={handleNewNameChange} />
                <input type="text" autoComplete='off' name={description} id={description} value={newDescription} onChange={handleNewDescriptionChange} />
                <input type="text" autoComplete='off' name={price} id={price} value={newPrice} onChange={handleNewPriceChange} />
            </div>
            <button type='button' onClick={() => handleSave()}>Save</button>
            <button type='button' onClick={() => setIsEditing(false)}>Cancel</button>
        </li>
    )

    const menuItem = (
        <li key={id}>
            <div className="menu-item-info">
                <p>{category}</p>
                <p className='item-info-name'>{name}</p>
                <p className='item-info-description'>{description}</p>
            </div>

            <div className='menu-item-edits'>
            <button type='button' onClick={() => setIsEditing(true)}>Edit</button>
            <span>${price}</span>
            </div>
        </li>
    )

    return (
        <>
            {isEditing ? editMenuItems : menuItem}
        </>
    )

}

export default MenuItemDetail