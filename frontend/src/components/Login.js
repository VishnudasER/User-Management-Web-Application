// components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/authSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
