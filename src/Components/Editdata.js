import { useState } from 'react';
import axios from 'axios';

function EditData({ component }) {
  const [name, setName] = useState(component.name);
  const [description, setDescription] = useState(component.description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/components/${component.id}`, { name, description });
      // redirect to home page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditData;