import React, { useEffect, useState } from 'react';
import api from '../services/api';
import logo from '../images/image.png';
import ReturnButton from '../components/ReturnButton';

function AllServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function loadServices() {
      const response = await api.get('/api/services');
      setServices(response.data)
    }
    loadServices();
  }, []);

  return (
    <article>
      <div className="header">
        <img src={logo} alt='logo Senior' className="logo-home"/>
        <h2>Serviços</h2>
      </div>
      <table className="rTable">
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Valor</th>
            <th>Excluir/Editar</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={ service._id }>
              <td>{ service.name }</td>
              <td>{ service.value }</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-buttton"
                  //onClick={ () => }
                  className="delete-button"
                >
                  Excluir
                </button>
                <button
                  type="button"
                  data-testid="edit-button"
                  className="edit-button"
                  //onClick={ () => }
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReturnButton />
    </article>
  );
}

export default AllServices;