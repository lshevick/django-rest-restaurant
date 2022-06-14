import MenuItem from './MenuItem';

const MenuList = ({ items, addToOrder, removeFromOrder, formatter }) => {

    const appetizers = items.filter((item) =>
        item.category === 'Appetizers'
    )
        .map((item) => (
            <MenuItem addToOrder={addToOrder} key={item.id} item={item} formatter={formatter} />
        ))

    const sushi = items.filter((item) =>
        item.category === 'Sushi'
    )
        .map((item) => (
            <MenuItem addToOrder={addToOrder} key={item.id} item={item} formatter={formatter} />
        ))

    const dessert = items.filter((item) =>
        item.category === 'Dessert'
    )
        .map((item) => (
            <MenuItem addToOrder={addToOrder} key={item.id} item={item} formatter={formatter} />
        ))

    return (
        <main>
            <div className="main-menu">

                <div className="sub-menu">
                    <h2>Appetizers</h2>
                    <ul>
                        {appetizers}
                    </ul>
                </div>

                <div className="sub-menu sushi">
                    <h2>Sushi</h2>
                    <ul>
                        {sushi}
                    </ul>
                </div>

                <div className="sub-menu dessert">
                    <h2>Dessert</h2>
                    <ul>
                        {dessert}
                    </ul>
                </div>

            </div>
        </main>
    );
}

export default MenuList;