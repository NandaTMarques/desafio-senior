import React, { useState } from 'react';
const servicos = ['eletricista', 'encanador', 'marceneiro'];
const funcionarios = ['Ediberto', 'Bruno', 'Fernanda'];

const Form = () => {
  const [service, setService] = useState(servicos[0]);
  const [time, setTime] = useState(1);
  const [funcionario, setFuncionario] = useState('Ediberto');
  const [tax, setTax] = useState(1);

  return (
    <form>
      <select name="serviço" value={service} onChange={ ({target}) => setService(target.value) }>
        {servicos.map((servico, index) => (
          <option value={servico} key={index}>{ servico }</option>
          ))}
      </select>
      <input 
        type="number"
        name="time"
        value={time}
        min={1} 
        onChange={ ({target}) => setTime(target.value) }
      />
      <select
        name="funcionario"
        value={funcionario}
        onChange={ ({target}) => setFuncionario(target.value) }
      >
        {funcionarios.map((funcionario, index) => (
          <option value={funcionario} key={index}>{ funcionario }</option>
          ))}
      </select>
      <input 
        type="number"
        name="tax"
        value={tax}
        min={1} 
        onChange={ ({target}) => setTax(target.value) }
      />
      <button
        className="add-service-order"
        type="button"
        data-testid="add-service"
        //onClick={ () =>  }
        >
        Adicionar Serviço
      </button>
    </form>
  )
}

export default Form;