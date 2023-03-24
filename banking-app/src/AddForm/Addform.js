import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function AddData() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const history = useHistory();

  const handleAddData = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/data', { name, amount });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Data</h2>
      <form onSubmit={handleAddData}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
}

export default AddData;

