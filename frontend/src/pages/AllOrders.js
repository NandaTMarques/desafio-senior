import React, { useState, useEffect } from 'react';
import api from '../services/api';

const AllOrders = [{service: 'encanador', time:'8', employee: 'Ediberto', tax:'12'},
{service: 'marceneiro', time:'8', employee: 'Bruno', tax:'12'}]

const Table = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/api/orders');
      console.log(response.data)
      setOrders(response.data)
    }
    loadOrders();
  }, []);

  return (
    <section className="content">
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
              <td>{ order.products.serviceId }</td>
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
    </section>
  )
}; 
  
export default AllOrders;
