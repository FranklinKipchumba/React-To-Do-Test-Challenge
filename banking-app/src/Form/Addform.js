import React, { useState } from 'react';

function AddDataComponent(props) {
  const [data, setData] = useState('');

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  const handleAddDataSubmit = (event) => {
    event.preventDefault();
    // Send data to server
  };

  return (
    <div>
      <h1>Add Data</h1>
      <form onSubmit={handleAddDataSubmit}>
        <div>
          <label htmlFor="data">Data:</label>
          <input type="text" id="data" value={data} onChange={handleDataChange} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddDataComponent;
