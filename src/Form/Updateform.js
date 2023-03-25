import React, { useState } from 'react';

function UpdateDataComponent(props) {
  const [data, setData] = useState(props.currentData);

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  const handleUpdateDataSubmit = (event) => {
    event.preventDefault();
    // Send updated data to server
  };

  return (
    <div>
      <h1>Update Data</h1>
      <form onSubmit={handleUpdateDataSubmit}>
        <div>
          <label htmlFor="data">Data:</label>
          <input type="text" id="data" value={data} onChange={handleDataChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateDataComponent;
