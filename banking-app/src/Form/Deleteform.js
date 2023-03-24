import React from 'react';

function UserDataComponent(props) {
  const handleDeleteDataClick = () => {
    // Send delete request to server
  };

  return (
    <div>
      <h1>User Data</h1>
      <p>{props.data}</p>
      <button onClick={handleDeleteDataClick}>Delete</button>
    </div>
  );
}

export default UserDataComponent;
