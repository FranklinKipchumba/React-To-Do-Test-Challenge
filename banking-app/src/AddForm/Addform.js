import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function AddData() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/data', { name, description });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
}

export default AddData;


