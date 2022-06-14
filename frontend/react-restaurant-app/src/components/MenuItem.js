
const MenuItem = ({ item, addToOrder, formatter }) => {

    return (
        <li>
            <div className="item-text-wrapper">
            <p className="item-name">
                <button className="add-item" onClick={() => addToOrder(item)}>+</button>
                {item.name}
            </p>
            <p className="item-description">{item.description}</p>
            </div>
            <span>{formatter.format(item.price)}</span>
        </li>
    );
}

export default MenuItem;