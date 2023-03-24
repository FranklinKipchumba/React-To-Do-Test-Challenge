import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  const [recentVisits, setRecentVisits] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      setData(response.data);
      setRecentVisits(response.data.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/data/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Recent Visits</h2>
      {recentVisits.map((d) => (
        <div key={d.id}>{d.name}</div>
      ))}
      <h2>User Data</h2>
      {data.map((d) => (
        <div key={d.id}>
          <p>{d.name}</p>
          <p>{d.description}</p>
          <button onClick={() => handleDelete(d.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Home;

