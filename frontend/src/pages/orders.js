import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import LogoutButton from '../components/LogoutButton';
import api from '../services/api';

const Orders = () => {
  const [allServices, setAllServices] = useState([]);
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    async function loadServices() {
      const responseService = await api.get('/api/services');
      const responseOrders = await api.get('/api/orders');
      setAllServices(responseService.data);
      setAllOrders(responseOrders);
    }
    loadServices();
  }, []);

  return (
    <section className="pageOrder">
      <Header />
      <Form allServices={allServices}/>
      <LogoutButton />
    </section>
  )
}

export default Orders;