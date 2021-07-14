import React from 'react';

const Table = ({totalOrder}) => {
  
  return (
    <article className="content">
      <h2>Detalhes do Pedido</h2>
      <table className="rTable">
        <thead>
          <tr>
            <th>Valor Total</th>
            <th>Valor do Lucro</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>R$ {totalOrder.serviceTotal},00</td>
              <td>R$ {totalOrder.service},00</td>
            </tr>
        </tbody>
      </table>
    </article>
  )
}; 
  
export default Table;
