import React from 'react';
import { useHistory } from 'react-router';

function AddOrderButton() {
  const history = useHistory();
  return (
    <button
      className="add-service-order"
      type="submit"
      data-testid="add-order"
      //onClick={ () =>  }
      >
      Criar Ordem
    </button>
  );
}

export default AddOrderButton;
