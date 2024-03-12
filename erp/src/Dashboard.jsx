import React from 'react';

function Dashboard() {
  // I have added Mock data for key metrics
  const totalProducts = 150;
  const totalOrders = 300;
  const revenue = "$50,000";
  const topSellingProduct = "Product X";
  const customerSatisfactionRating = "4.5/5";

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Total Products */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Products</h3>
          <p className="text-3xl font-bold">{totalProducts}</p>
        </div>
        {/* Total Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
          <p className="text-3xl font-bold">{totalOrders}</p>
        </div>
        {/* Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Revenue</h3>
          <p className="text-3xl font-bold">{revenue}</p>
        </div>
        {/* Top Selling Product */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Top Selling Product</h3>
          <p className="text-lg font-bold">{topSellingProduct}</p>
        </div>
        {/* Customer Satisfaction Rating */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <h3 className="text-lg font-semibold mb-2">Customer Satisfaction Rating</h3>
          <p className="text-3xl font-bold">{customerSatisfactionRating}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
