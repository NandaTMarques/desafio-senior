import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/image.png';

const Home = () => {
  return (
    <section className="home-card">
      <div className="card">
        <img src={logo} alt='logo Senior' className="logo-home"/>
        <div className="cardButtons">
          <button
          className="initial-button"
          type="button"
          data-testid="register-button"
          >
            <Link to="/services" className="">Serviço</Link>
          </button>
          <button
          className="initial-button"
          type="button"
          data-testid="service-request-button"
          >
            <Link to="/orders" className="">Pedido de Serviço</Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home;