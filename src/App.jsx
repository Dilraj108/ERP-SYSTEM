
import React from 'react';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Products from './components/Products';
import Edit from './components/Edit';
import OrdersManagement from './components/OrdersManagement';
import Sidebar from './components/Sidebar';
import { useState } from 'react';


const App = () => {
  const [Arr, setArr] = useState( [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 1200,
      stockQuantity: 50
    },
    {
      id: 2,
      name: "Smartphone",
      category: "Electronics",
      price: 800,
      stockQuantity: 100
    },
    {
      id: 3,
      name: "Desk Chair",
      category: "Furniture",
      price: 150,
      stockQuantity: 30
    },
    {
      id: 4,
      name: "Printer",
      category: "Electronics",
      price: 250,
      stockQuantity: 20
    },
    {
      id: 5,
      name: "Notebook",
      category: "Stationery",
      price: 5,
      stockQuantity: 200
    },
    {
      id: 6,
      name: "Office Desk",
      category: "Furniture",
      price: 300,
      stockQuantity: 15
    },
    {
      id: 7,
      name: "Coffee Maker",
      category: "Appliances",
      price: 50,
      stockQuantity: 40
    },
    {
      id: 8,
      name: "Conference Table",
      category: "Furniture",
      price: 500,
      stockQuantity: 10
    },
    {
      id: 9,
      name: "External Hard Drive",
      category: "Electronics",
      price: 100,
      stockQuantity: 25
    },
    {
      id: 10,
      name: "Whiteboard",
      category: "Office Supplies",
      price: 50,
      stockQuantity: 20
    },
   
  ]);
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "John Doe",
      orderDate: "2024-03-01",
      status: "Pending"
    },
    {
      id: 2, 
      customerName: "Jane Smith",
      orderDate: "2024-03-03",
      status: "Processing"
    },
    {
      id: 3,
      customerName: "Alice Johnson",
      orderDate: "2024-03-05",
      status: "Shipped"
    },
    {
      id: 4,
      customerName: "Bob Brown",
      orderDate: "2024-03-07",
      status: "Delivered"
    },
    {
      id: 5,
      customerName: "Emma Wilson",
      orderDate: "2024-03-10",
      status: "Processing"
    },
    {
      id: 6,
      customerName: "Michael Clark",
      orderDate: "2024-03-12",
      status: "Pending"
    },
    {
      id: 7,
      customerName: "Sarah Turner",
      orderDate: "2024-03-15",
      status: "Shipped"
    },
    {
      id: 8,
      customerName: "David Lee",
      orderDate: "2024-03-18",
      status: "Processing"
    },
    {
      id: 9,
      customerName: "Olivia Hernandez",
      orderDate: "2024-03-20",
      status: "Delivered"
    },
    {
      id: 10,
      customerName: "Sophia Martinez",
      orderDate: "2024-03-22",
      status: "Processing"
    },
   
  ]);

  return (
   
 <Router >
  
  <Routes>
    <Route path='/' element={<Dashboard Arr={Arr} orders={orders} />}/>
    <Route path='/Products' element={<Products Arr={Arr} setArr={setArr} />}/>
    <Route path='/Edit' element={<Edit />}/>
    <Route path='/Orders' element={<OrdersManagement orders={orders} setOrders={setOrders}/>}/>
    <Route path='/Sidebar' element={<Sidebar />}/>

    </Routes>

 </Router>

  );
};

export default App;
