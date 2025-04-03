import React from 'react';

const Menu_item_card = ({props}) => {
    return (
        <div className="card my-3" key={props.id}>
                <img src={props.image} className="card-img-top" alt={props.title}></img>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.description}</p>
                    <button className='btn btn-dark'>Add to Order</button>
                </div>
        </div>
    );
};

export default Menu_item_card;