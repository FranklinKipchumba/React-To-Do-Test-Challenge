import React, { useState } from 'react';
import api from '../utils/api';

function AddTodo() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      completed: false
    };
    await api.post('/todos', newTodo);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a new to-do" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;