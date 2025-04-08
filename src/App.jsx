
import { useState } from 'react'
import Menu from './Components/Menu';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css"

function App() {
  const [theme,setTheme] = useState("dark");
  const [order,setOrder] = useState([]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const menu = [
    {id:"1",title:'Burger',description:'A delicious burger with all the fixings.',price:'SEK 79.99',image:'https://placehold.co/400'},
    {id:"2",title:'Pizza',description:'Classic pizza with your favorite toppings.',price:'SEK 99.99',image:'https://placehold.co/400'},
    {id:"3",title:'Fries',description:'Crispy golden fries served hot and fresh.',price:'SEK 59.99',image:'https://placehold.co/400'}
  ];

  const addToOrder = (item) => {
    setOrder(prevOrder => {
      if(prevOrder.find(orderItem => orderItem === item)) {
        return prevOrder.map(orderItem => orderItem.id === item.id ? { ...orderItem,quantity:orderItem.quantity + 1} : orderItem);
      } else {
        return [...prevOrder, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <div className={theme}>
        <button className={theme === "dark" ? "btn btn-light" : "btn btn-dark"} onClick = {toggleTheme}>{theme === "dark" ? "Light" : "Dark"}</button>
        <div>
          <Menu menu = {menu} addToOrder={addToOrder}/>
        </div>
      </div>
    </>
  )
} 

export default App
