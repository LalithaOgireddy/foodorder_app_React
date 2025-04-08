import React from 'react';

const Menu_item_card = ({item, addToOrder}) => {
    return (
        <div className="card my-3" >
                <img src={item.image} className="card-img-top" alt={item.title}></img>
                <div className="card-body">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-text">{item.description}</p>
                    <button className='btn btn-dark' onClick={()=> addToOrder(item)}>Add to Order</button>
                </div>
        </div>
    );
};

export default Menu_item_card;