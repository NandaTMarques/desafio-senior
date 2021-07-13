import React, { useState } from 'react';
import logo from '../images/image.png';
import { Redirect } from 'react-router';

const Home = () => {
  const [redirectServices, setRedirectServices] = useState(false);
  const [redirectOrders, setRedirectOrders] = useState(false);

  return (
    <section className="home-card">
      {redirectServices && <Redirect to="/services" />}
      {redirectOrders && <Redirect to="/orders" />}
      <Redirect to="/" />
      <div className="card">
        <img src={logo} alt='logo Senior' className="logo-home"/>
        <div className="cardButtons">
          <button
          className="initial-button"
          type="button"
          data-testid="register-button"
          onClick={() => setRedirectServices(true)}
          >
            Serviço
          </button>
          <button
          className="initial-button"
          type="button"
          data-testid="service-request-button"
          onClick={() => setRedirectOrders(true)}
          >
            Pedido de Serviço
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home;