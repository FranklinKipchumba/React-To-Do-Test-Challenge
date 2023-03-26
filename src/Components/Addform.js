import { useState } from 'react';
import axios from 'axios';

function AddData({ addData }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/components', { name, description });
      addData(res.data);
      // redirect to home page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddData;