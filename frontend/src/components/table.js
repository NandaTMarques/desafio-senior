import React, { useState } from 'react';

const Services = [{service: 'encanador', time:'8', employee: 'Ediberto', tax:'12'}]

const Table = () => {
  return (
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
                data-testid="delete-btn"
                //onClick={ () => removeServiceButton(service.id) }
                className="delete-button"
              >
                Excluir
              </button>
              <button
                type="button"
                data-testid="edit-btn"
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
  )
}; 
  
export default Table;
