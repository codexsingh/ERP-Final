import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/products">Manage Products</Link></li>
        <li><Link to="/orders">Manage Orders</Link></li>
        <li><Link to="/calendar">Orders Calendar View</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
