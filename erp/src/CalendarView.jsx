import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarView() {
  // I have added Mock data for orders with delivery dates (client(s) can add their own)
  const orders = [
    { id: 1, customer: 'Customer A', deliveryDate: new Date(2024, 2, 15) },
    { id: 2, customer: 'Customer B', deliveryDate: new Date(2024, 2, 17) },
    { id: 3, customer: 'Customer C', deliveryDate: new Date(2024, 2, 17) },
    // More orders can be added here...
  ];

  // This is the State to store the selected date
  const [selectedDate, setSelectedDate] = useState(null);

  // Added Function to filter orders by selected date
  const filteredOrders = orders.filter(order =>
    selectedDate ? order.deliveryDate.toDateString() === selectedDate.toDateString() : true
  );

  return (
    <div>
      <h2>Orders Calendar View</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Calendar
          onChange={date => setSelectedDate(date)}
          value={selectedDate}
          calendarType="gregory"
        />
      </div>
      <div>
        <h3>{selectedDate ? `Orders for ${selectedDate.toDateString()}` : 'All Orders'}</h3>
        <ul>
          {filteredOrders.map(order => (
            <li key={order.id}>
              {order.customer} - {order.deliveryDate.toDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CalendarView;
