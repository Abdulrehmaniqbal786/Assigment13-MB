import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
 import OrderList from '../pages/OrderList';
 import OrderDetails from '../pages/OrderDetails';
 import Costumer from '../pages/Costumer';
 import Analytics from '../pages/Analytics';
 import Reviews from '../pages/Reviews';
 import Foods from '../pages/Foods';
 import FoodDetails from '../pages/FoodDetails';
 import Calender from '../pages/Calender';
 import CostumerDetails from '../pages/CostumerDetails';
 import Chat from '../pages/chat';
 import Wallet from '../pages/Wallet';
import Side_Bar from '../components/Side_Bar';
const Router_App = () => {
  return (
    
    <BrowserRouter>
<Side_Bar>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path='/orderlist' element={<OrderList />} />            <Route path='/orderdetails' element={<OrderDetails />} />
    <Route path='/costumer' element={<Costumer />} />
    <Route path='/analytics' element={<Analytics />} />
    <Route path='/reviews' element={<Reviews />} />
    <Route path='/foods' element={<Foods />} />
    <Route path='/fooddetails' element={<FoodDetails />} />
    <Route path='/costumerdetails' element={<CostumerDetails />} />
    <Route path='/calender' element={<Calender />} />
    <Route path='/chat' element={<Chat />} />
    <Route path='/wallet' element={<Wallet />} />
  </Routes>
</Side_Bar>
</BrowserRouter>
  )
}

export default Router_App