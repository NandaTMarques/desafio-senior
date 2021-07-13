import React, { useState } from 'react';
import { useHistory } from 'react-router';
import logo from '../images/image.png';
import LogoutButton from '../components/LogoutButton';

const Services = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState(1);
  const history = useHistory();

  return (
    <section>
      <div className="header">
        <img src={logo} alt='logo Senior' className="logo-home"/>
        <h2>Cadastrar Serviços</h2>
      </div>
        <form className="service-form">
          <input 
            type="text"
            name="name"
            value={name}
            min={1}
            onChange={ ({target}) => setName(target.value) }
          />
          <input 
            type="number"
            name="value"
            value={value}
            min={1}
            step=".01"
            onChange={ ({target}) => setValue(target.value) }
          />
          <button
            className="add-service"
            type="button"
            data-testid="add-service"
            //onClick={ () =>  }
            >
            Cadastrar
          </button>
          <LogoutButton />
        </form>
    </section>
  )
}

export default Services;