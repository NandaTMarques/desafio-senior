import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import LogoutButton from '../components/LogoutButton';
import AddOrderButton from '../components/AddOrderButton';

const Orders = () => {
  return (
    <section className="pageOrder">
      <Header />
      <Form />
      <Table />
      <AddOrderButton />
      <LogoutButton />
    </section>
  )
}

export default Orders;