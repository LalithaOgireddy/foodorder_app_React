import React from 'react';

import Menu_item_card from './Menu_item_card';

const menu = [
    {id:"1",title:'Burger',description:'A delicious burger with all the fixings.',price:'SEK 79.99',image:'https://placehold.co/400'},
    {id:"2",title:'Pizza',description:'Classic pizza with your favorite toppings.',price:'SEK 99.99',image:'https://placehold.co/400'},
    {id:"3",title:'Fries',description:'Crispy golden fries served hot and fresh.',price:'SEK 59.99',image:'https://placehold.co/400'}
];

const Menu = () => {
    return (
        
        <div className="container mt-4">
            <h1 className="text-center mb-4">Fast Food Menu</h1>
            <div className="row">
                
                {
                    menu.map((item) => (
                        <div className="col-md-4">
                            <Menu_item_card key={item.id} props={item}/>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
};

export default Menu;