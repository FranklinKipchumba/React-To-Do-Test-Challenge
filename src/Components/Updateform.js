import React, { useState } from 'react';

function UpdateData({ component, updateData }) {
  const handleUpdate = () => {
    updateData(component.id);
  };

  return (
    <div>
      <h2>{component.name}</h2>
      <p>{component.description}</p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateData;
