import React from 'react';
import logo from '../images/image.png'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt='logo Senior' className="logo-home"/>
      <h1>Cadastro de Pedidos</h1>
    </header>
  )
}

export default Header;