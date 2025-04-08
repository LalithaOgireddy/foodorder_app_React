
import { useState } from 'react'
import Menu from './Components/Menu';
import Order from './Components/Order';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css"

function App() {
  const [theme,setTheme] = useState("dark");
  const [totalAmount,setTotalAmount] = useState(0);
  const [order,setOrder] = useState([]);


  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const menu = [
    {id:"1",title:'Burger',description:'A delicious burger with all the fixings.',price: 79.99,image:'https://placehold.co/400'},
    {id:"2",title:'Pizza',description:'Classic pizza with your favorite toppings.',price:99.99,image:'https://placehold.co/400'},
    {id:"3",title:'Fries',description:'Crispy golden fries served hot and fresh.',price:59.99,image:'https://placehold.co/400'}
  ];

  const addToOrder = (item) => {
    setOrder(prevOrder => {
      const existingItem = prevOrder.find(orderItem => orderItem.id === item.id);
  
      if (existingItem) {
        const newQuantity = existingItem.quantity + 1;
        const updatedOrder = prevOrder.map(orderItem =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: newQuantity, cost: parseFloat((item.price * newQuantity).toFixed(2)) }
            : orderItem
        );
        updateTotalAmount(updatedOrder);
        return updatedOrder;
      } else {
        const updatedOrder = [...prevOrder, { ...item, quantity: 1, cost: item.price }];
        updateTotalAmount(updatedOrder);
        return updatedOrder;
      }
    });
  };
  

  const removeFromOrder = (item) => {
    setOrder(prevOrder => {
      const existingItem = prevOrder.find(orderItem => orderItem.id === item.id);
  
      if (existingItem) {
        if (existingItem.quantity > 1) {
          const updatedOrder = prevOrder.map(orderItem =>
            orderItem.id === item.id
              ? {
                  ...orderItem,
                  quantity: orderItem.quantity - 1,
                  cost: parseFloat((item.price * (orderItem.quantity - 1)).toFixed(2))
                }
              : orderItem
          );
          updateTotalAmount(updatedOrder);
          return updatedOrder;
        } else {
          const updatedOrder = prevOrder.filter(orderItem => orderItem.id !== item.id);
          updateTotalAmount(updatedOrder);
          return updatedOrder;
        }
      }
  
      return prevOrder;
    });
  };
  
  
  const updateTotalAmount = (updatedOrder) => {
    setTotalAmount(updatedOrder.reduce((total, orderItem) => total + orderItem.cost, 0).toFixed(2));
  }


  return (
    <>
      <div className={theme}>
        <button className={theme === "dark" ? "btn btn-light" : "btn btn-dark"} onClick = {toggleTheme}>{theme === "dark" ? "Light" : "Dark"}</button>
        <div>
          <Menu menu = {menu} addToOrder={addToOrder}/>
          <Order order={order} totalAmount={totalAmount} addToOrder={addToOrder} removeFromOrder={removeFromOrder}/>
        </div>
      </div>
    </>
  )
} 

export default App
