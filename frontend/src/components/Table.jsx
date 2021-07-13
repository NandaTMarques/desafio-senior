import React, { useState } from 'react';

const Services = [{service: 'encanador', time:'8', employee: 'Ediberto', tax:'12'}]

const Table = () => {
  return (
    <section className="table-section">
      <table>
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Horas</th>
            <th>Funcionário</th>
            <th>Valor do imposto</th>
          </tr>
        </thead>
        <tbody>
          {Services.map((service) => (
            <tr key={ service.service }>
              <td>{ service.service }</td>
              <td>{ service.time }</td>
              <td>{ service.employee }</td>
              <td>{ service.tax }</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-buttton"
                  //onClick={ () => removeServiceButton(service.id) }
                  className="delete-button"
                >
                  Excluir
                </button>
                <button
                  type="button"
                  data-testid="edit-button"
                  className="edit-button"
                  //onClick={ () => selectExpenseButton(expense.id) }
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="add-service-order"
        type="submit"
        data-testid="add-order"
        //onClick={ () =>  }
        >
        Criar Ordem
      </button>
    </section>
  )
}; 
  
export default Table;
