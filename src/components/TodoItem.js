import React from 'react';

function TodoItem({ todo, onDelete, onUpdate }) {
  const handleDelete = () => {
    onDelete(todo.id);
  }

  const handleUpdate = () => {
    onUpdate(todo.id);
  }

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleUpdate} />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;