import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import LogoutButton from '../components/LogoutButton';

const Orders = () => {
  return (
    <section className="pageOrder">
      <Header />
      <Form />
      <Table />
      <LogoutButton />
    </section>
  )
}

export default Orders;