import React, { useState } from 'react';
import logo from '../images/image.png';
import LogoutButton from '../components/LogoutButton';
import AllServicesButton from '../components/AllServicesButton';
import api from '../services/api';

const Services = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState();

  async function handleSubmit() {
    const data = { name, value: parseInt(value) };
    if(name !== '' && value !== 'undefined' && value !== '') {
      const response = await api.post('/api/services', data);
      if(response.status === 201) {
        alert('Serviço cadastrado com sucesso!');
      } else {
        alert('Erro ao cadastrar o serviço!')
      }
    } else {
      alert('Por favor, preencha os dados corretamente!')
    }
  };

  return (
    <acticle>
      <div className="header">
        <img src={logo} alt='logo Senior' className="logo-home"/>
        <h2>Cadastrar Serviços</h2>
      </div>
      <form className="service-form">
        <input
          required
          placeholder="Serviço"
          type="text"
          name="name"
          value={name}
          min={1}
          onChange={ ({target}) => setName(target.value) }
        />
        <input
          placeholder="Valor por hora"
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
          onClick={ handleSubmit }
          >
          Cadastrar
        </button>
        <AllServicesButton />
        <LogoutButton />
      </form>
    </acticle>
  )
}

export default Services;