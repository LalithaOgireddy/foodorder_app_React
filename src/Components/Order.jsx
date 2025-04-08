import React from 'react';


const OrderSummary = (props) => {
  return (
    <div>
        <table>
          <tr>
            <th>Item</th>
            <th>Add/Remove</th>
            <th>Price</th>
          </tr>
          {
           props.order.map((item) => {
            <tr>
              <td>{props.order.title}</td>
              <td>
                <i class="bi bi-dash"></i>
                <i class="bi bi-plus-lg"></i>
              </td>
              <td>
                {props.order.price}
              </td>
            </tr>
        })}
        <tr>
            <td>Total</td>
            <td></td>
            <td>{totalAmount}</td>
          </tr>
        </table>
        
      
    </div>
  );
};

export default OrderSummary;