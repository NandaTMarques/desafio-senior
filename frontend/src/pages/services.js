import React, { useState } from 'react';

const Services = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState(1);
  return (
    <section>
      <h2>Cadastrar Serviços</h2>
      <form>
      <input 
        type="text"
        name="name"
        value={name}
        min={1}
        onChange={ ({target}) => setName(target.value) }
      />
      <input 
        type="number"
        name="value"
        value={value}
        min={1}
        step=".01"
        onChange={ ({target}) => setValue(target.value) }
      />
      </form>
    </section>
  )
}

export default Services;