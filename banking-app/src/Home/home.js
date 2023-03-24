import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/user-data');
      setUserData(response.data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/user-data/${id}`);
      setUserData(userData.filter((data) => data.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Recent Visits</h1>
      <ul>
        <li>Visit 1</li>
        <li>Visit 2</li>
        <li>Visit 3</li>
      </ul>
      <h1>User Data</h1>
      <ul>
        {userData.map((data) => (
          <li key={data.id}>
            {data.name} - {data.amount}
            <button onClick={() => handleDelete(data.id)}>Delete</button>
            <Link to={`/update-data/${data.id}`}>Update</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-data">Add Data</Link>
    </div>
  );
}

export default Home;
