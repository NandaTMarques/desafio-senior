import React from 'react';
import logo from '../images/image.png'

const Header = () => {
  return (
    <header>
      <img src={logo} alt='logo Senior'/>
      <h1>Cadastro de Pedidos</h1>
    </header>
  )
}

export default Header;