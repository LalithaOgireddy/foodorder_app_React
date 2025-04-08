import React from 'react';

const Order = ({ order, totalAmount, addToOrder, removeFromOrder }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">Your Order</h2>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>Item</th>
            <th>Add/Remove</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            order.map(item => (
              <tr key={item.id}>
                <td>{item.title} x{item.quantity} </td>
                <td>
                  <button type="button" onClick={() => removeFromOrder(item)} className="btn btn-danger mx-1">-</button>
                  <button type="button" onClick={() => addToOrder(item)} className="btn btn-success mx-1">+</button>
                </td>
                <td>{item.cost.toFixed(2)}</td>
              </tr>
            ))
          }
          <tr>
            <td colSpan="2"><strong>Total</strong></td>
            <td><strong>{totalAmount}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
