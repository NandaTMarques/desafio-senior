import React, { useState } from 'react';

const servicos = ['eletricista', 'encanador', 'marceneiro'];
const funcionarios = ['Ediberto', 'Bruno', 'Fernanda'];

const Form = () => {
  const [service, setService] = useState();
  const [time, setTime] = useState();
  const [funcionario, setFuncionario] = useState();
  const [tax, setTax] = useState();

  return (
    <form className="form-select">
      <select name="serviço" value={service} onChange={ ({target}) => setService(target.value) }>
        <option value="" disabled selected>Serviço</option>
        {servicos.map((servico, index) => (
          <option value={servico} key={index}>{ servico }</option>
          ))}
      </select>
      <input
        placeholder="Horas"
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
        <option value="" disabled selected>Funcionário</option>
        {funcionarios.map((funcionario, index) => (
          <option value={funcionario} key={index}>{ funcionario }</option>
          ))}
      </select>
      <input
        placeholder="Taxa"
        type="number"
        name="tax"
        value={tax}
        min={1} 
        onChange={ ({target}) => setTax(target.value) }
      />
      <button
        className="add-service-form"
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