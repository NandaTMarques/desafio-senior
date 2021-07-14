import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Table = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/api/orders');
      //console.log(response.data)
      setOrders(response.data)
    }
    loadOrders();
  }, []);

  return (
    <article className="content">
      <table className="rTable">
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Horas</th>
            <th>Funcionário</th>
            <th>Valor do imposto</th>
            <th>Excluir/Editar</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={ order._id }>
              <td>{ order.products.nameService }</td>
              <td>{ order.products.amountHours }</td>
              <td>{ order.products.employee }</td>
              <td>{ order.products.tavRate }</td>
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
      <section>
        <h2>Total do Pedido:</h2>
        <h2>Lucro da Empresa:</h2>
      </section>
    </article>
  )
}; 
  
export default Table;
