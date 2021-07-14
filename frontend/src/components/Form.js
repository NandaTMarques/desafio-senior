import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Table from '../components/Table';

const funcionarios = ['Fernanda', 'Ícaro', 'Beto', 'Bruno'];

const Form = ({allServices}) => {
  const [nameService, setNameService] = useState();
  const [amountHours, setAmountHours] = useState();
  const [employee, setEmployee] = useState();
  const [taxRate, setTaxRate] = useState();
  const [totalOrder, setTotalOrder] = useState({
    serviceTotal: 0,
    service: 0
  })

  useEffect(() => {
    const [serviceData] = allServices.filter(({name}) => name === nameService);
    if(serviceData) {
      const serviceTotal = serviceData.value * amountHours;
      const service = serviceTotal / 100 * taxRate;
      setTotalOrder({serviceTotal, service});
    }
  }, [taxRate]);

  async function handleSubmit() {
    const data = [{ nameService, amountHours: parseInt(amountHours), employee, taxRate: parseInt(taxRate) }];
    if(nameService !== 'undefined' && amountHours !== 'undefined' && employee !== 'undefined' && taxRate !== 'undefined') {
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

  return (
    <div>
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
      <Table totalOrder={totalOrder}/>
    </div>
  )
}

export default Form;