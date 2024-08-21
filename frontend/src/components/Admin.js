// components/Admin.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/admin/users/');
      setUsers(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
