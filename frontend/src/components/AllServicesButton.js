import React from 'react';
import { useHistory } from 'react-router';

function AllServicesButton() {
  const history = useHistory();
  return (
    <button
      onClick={ () => {
        history.push('/services/all-services');
      } }
      className="all-services-button"
      data-testid="logout-button"
      type="button"
    >
    Listar Serviços
    </button>
  );
}

export default AllServicesButton;