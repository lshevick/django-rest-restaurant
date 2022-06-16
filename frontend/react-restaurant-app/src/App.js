import './App.css';
import Order from './components/order';
import MenuList from './components/MenuList';
import Homescreen from './components/Homescreen';
import AdminView from './components/AdminView';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';



function handleError(err) {
  console.warn(err);
}


const INITIAL_STATE = [];


function App() {
  const [screen, setScreen] = useState('homescreen');
  const [order, setOrder] = useState(INITIAL_STATE);
  const [items, setItems] = useState(null);
  const [prevOrder, setPrevOrder] = useState([]);
  
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  
  
  const getPrevOrders = async () => {
    const response = await fetch('/api/v1/orders/', { headers: { 'Content-Type': 'applications/json' } }).catch(handleError)

    if(!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    setPrevOrder(data);
  }

  const getMenuItems = async () => {
    const response = await fetch('/api/v1/foods/', { headers: { 'Content-Type': 'applications/json' } }).catch(handleError);

    if (!response.ok) {
      throw new Error('Network response is not ok')
    }

    const data = await response.json()
    setItems(data);
  }

  const placeOrder = async (name, order, total) => {
    const data = {
      'name': name,
      'items': order,
      'total': total,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(data),
    }

    const response = await fetch('/api/v1/orders/', options).catch(handleError)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const json = await response.json()

    setPrevOrder([...prevOrder, json])
    setOrder(INITIAL_STATE)
  }


  const addMenuItem = async (name, description, price, category) => {
    const data = {
      'name': name,
      'description': description,
      'price': price,
      'category': category,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(data),
    }

    const response = await fetch('/api/v1/foods/', options).catch(handleError)

    if(!response.ok) {
      throw new Error('Network Response not ok')
    }

    const json = await response.json();
    console.log(json);

    setItems([...items, json])
  }

  const editMenuItem = async (id, name, description, price, category, active) => {
    const data = {
      'id': id,
      'name': name,
      'description': description,
      'price': price,
      'category': category,
      'active': active,
    }

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(data),
    }

    const response = await fetch(`/api/v1/foods/${id}/food/`, options)
    
    if(!response.ok) {
      throw new Error('Network Response not ok')
    }

    const json = await response.json()

    setItems(items.map(i => i.id !== json.id ? i : json))

  }

    const updateOrderStatus = async (id, status) => {
      const data = {
        'id': id,
      'completed': status
    }
    
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(data),
    }

    const response = await fetch(`/api/v1/orders/${id}/order/`, options).catch(handleError)

    if(!response.ok) {
      throw new Error('Network response was not ok')
    }

    const json = await response.json()
    console.log(json)
    
    setPrevOrder(prevOrder.map(i => i.id !== json.id ? i : json))
  }

  useEffect(() => {
    getPrevOrders()
  }, [])


  useEffect(() => {
    getMenuItems();
  }, []);


  const addToOrder = (item) => {
    const orderItem = { ...item };
    if (!order.find(i => i.name === orderItem.name)) {
      orderItem.amount = 1;
      setOrder([...order, orderItem]);
    } else {
      const index = order.findIndex((e) => e.name === orderItem.name);
      order[index].amount = order[index].amount + 1;
      order[index].price = parseFloat(order[index].price) + parseFloat(orderItem.price);
    }
  }

  const removeFromOrder = (id) => {
    const updatedOrder = [...order];
    const index = updatedOrder.findIndex(item => item.id === id);
    updatedOrder.splice(index, 1);
    setOrder(updatedOrder);
  }

  const totalAmount = (
    order.length === 0 ? 0 : order.map((item) => item.amount).reduce((prev, current) => prev + current)
  )

  const checkOrder = (
    totalAmount === 0 ? <span></span> : <span className='order-num'>{totalAmount}</span>
  )

  return (
    <div className="App">
      <header>
        <nav className='navbar'>
          <button className='homepage' onClick={() => setScreen('homescreen')}><FontAwesomeIcon icon={faFish} style={{ color: '#B55A2B', fontSize: '3rem', marginLeft: '1rem' }} /></button>
          <ul className='nav-list'>
            <li className='nav-item'><button onClick={() => setScreen('menuScreen')}>Menu</button></li>
            <li className='nav-item'><button onClick={() => setScreen('orderScreen')}>Order</button>
              {checkOrder}</li>
              <li className='nav-item nav-item-admin'>
                <button onClick={() => setScreen('adminView')}>Admin</button>
              </li>
          </ul>
        </nav>
      </header>


      {screen === 'menuScreen' && <MenuList items={items} addToOrder={addToOrder} formatter={formatter} />}
      {screen === 'orderScreen' && <Order placeOrder={placeOrder} order={order} removeFromOrder={removeFromOrder} formatter={formatter} />}
      {screen === 'homescreen' && <Homescreen />}
      {screen === 'adminView' && <AdminView prevOrder={prevOrder} items={items} addMenuItem={addMenuItem} editMenuItem={editMenuItem} updateOrderStatus={updateOrderStatus} />}




    </div>
  );
}

export default App;
