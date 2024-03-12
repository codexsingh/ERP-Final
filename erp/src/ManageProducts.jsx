import React from 'react';
import './ManageProducts.css'; 

function ManageProducts() {
  const products = [
    { id: 1, name: 'Product 1', category: 'Category 1', price: 10, stockQuantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 20, stockQuantity: 200 },
    { id: 3, name: 'Product 3', category: 'Category 1', price: 30, stockQuantity: 150 }
  ];

  return (
    <div className="manage-products-container">
      <h2>Manage Products</h2>
      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stockQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageProducts;
