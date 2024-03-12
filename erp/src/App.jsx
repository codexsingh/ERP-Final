import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import ManageProducts from './ManageProducts';
import ManageOrders from './ManageOrders';
import CalendarView from './CalendarView';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={Dashboard()} />
          <Route path="/products" element={ManageProducts()} />
          <Route path="/orders" element={ManageOrders()} />
          <Route path="/calendar" element={CalendarView()} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
