import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../utils/api';

function DeleteTodo() {
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = async () => {
    await api.delete(`/todos/${id}`);
    history.push('/');
  }

  return (
    <div>
      <p>Are you sure you want to delete this to-do?</p>
      <button onClick={handleDelete}>Yes, delete</button>
    </div>
  );
}

export default DeleteTodo;