import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../utils/api';

function EditTodo() {
  const { id } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await api.get(`/todos/${id}`);
      setTitle(response.data.title);
    }
    fetchTodo();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTodo = {
      title
    };
    await api.put(`/todos/${id}`, updatedTodo);
    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a new title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditTodo;
