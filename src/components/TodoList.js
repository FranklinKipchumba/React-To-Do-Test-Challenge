import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await api.get('/todos');
      setTodos(response.data);
    }
    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/todos/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handleUpdate = async (id) => {
    const updatedTodo = {
      ...todos.find(todo => todo.id === id),
      completed: true
    };
    await api.put(`/todos/${id}`, updatedTodo);
    setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
  }

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} onUpdate={handleUpdate} />
      ))}
    </ul>
  );
}

export default TodoList;