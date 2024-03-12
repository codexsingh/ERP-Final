import React from 'react';
import './ManageOrders.css'; 

function ManageOrders() {
  const orders = [
    { id: 1, customer: 'Customer A', orderDate: '2024-03-09', status: 'Pending' },
    { id: 2, customer: 'Customer B', orderDate: '2024-03-10', status: 'Shipped' },
    { id: 3, customer: 'Customer C', orderDate: '2024-03-11', status: 'Delivered' }
  ];

  const handleDelete = (id) => {
    // Implemented the Delete Orders functionality
    console.log(`Delete order with ID: ${id}`);
  };

  return (
    <div className="manage-orders-container">
      <h2>Manage Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleDelete(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageOrders;
