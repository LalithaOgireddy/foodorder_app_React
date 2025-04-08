import React from 'react';
import Menu_item_card from './Menu_item_card';



const Menu = ({menu,addToOrder}) => {
    return (
        
        <div className="container mt-4">
            <h1 className="text-center mb-4">Fast Food Menu</h1>
            <div className="row">
                
                {
                    menu.map((item) => (
                        <div className="col-md-4" key={item.id}>
                            <Menu_item_card  item={item} addToOrder={addToOrder}/>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
};

export default Menu;