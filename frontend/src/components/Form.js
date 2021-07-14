import React, { useState, useEffect } from 'react';
import api from '../services/api';

const servicos = ['eletricista', 'encanador', 'marceneiro'];
const funcionarios = ['Fernanda', 'Ícaro', 'Beto', 'Bruno'];

const Form = () => {
  const [nameService, setNameService] = useState();
  const [amountHours, setAmountHours] = useState();
  const [employee, setEmployee] = useState();
  const [taxRate, setTaxRate] = useState();
  const [allServices, setAllServices] = useState([]);

  async function handleSubmit() {
    const data = [{ nameService, amountHours: parseInt(amountHours), employee, taxRate: parseInt(taxRate) }];
    console.log(data);
    if(nameService !== '' && nameService !== 'undefined' && amountHours !== '' && amountHours !== 'undefined' && employee !== '' && employee !== 'undefined' && taxRate !== '' && taxRate !== 'undefined') {
      const response = await api.post('/api/orders', data);
      if(response.status === 201) {
        alert('Pedido cadastrado com sucesso!');
      } else {
        alert('Erro ao cadastrar o pedido!')
      }
    } else {
      alert('Por favor, preencha os dados corretamente!')
    }
  };

  useEffect(() => {
    async function loadServices() {
      const response = await api.get('/api/services');
      console.log(response.data)
      setAllServices(response.data)
    }
    loadServices();
  }, []);

  return (
    <form className="form-select">
      <select name="serviço" value={nameService} onChange={ ({target}) => setNameService(target.value) }>
        <option value="" disabled selected>Serviço</option>
        {allServices.map((service, index) => (
          <option value={service.name} key={index}>{ service.name }</option>
          ))}
      </select>
      <input
        placeholder="Horas"
        type="number"
        name="time"
        value={amountHours}
        min={1} 
        onChange={ ({target}) => setAmountHours(target.value) }
      />
      <select
        name="employee"
        value={employee}
        onChange={ ({target}) => setEmployee(target.value) }
      >
        <option value="" disabled selected>Funcionário</option>
        {funcionarios.map((employee, index) => (
          <option value={employee} key={index}>{ employee }</option>
          ))}
      </select>
      <input
        placeholder="Taxa"
        type="number"
        name="tax"
        value={taxRate}
        min={1} 
        onChange={ ({target}) => setTaxRate(target.value) }
      />
      <button
        className="add-service-form"
        type="button"
        data-testid="add-service"
        onClick={ handleSubmit }
        >
        Adicionar Serviço
      </button>
    </form>
  )
}

export default Form;