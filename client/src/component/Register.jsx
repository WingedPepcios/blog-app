import React, { useState } from 'react';
import { http } from '../utils/httpClient';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    const res = await http.post('/user/register', { username, password });
    console.log(res);
  };

  return (
    <div>
      <input type="text" defaultValue={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input
        type="password"
        defaultValue={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={() => submit()}>
        Klik
      </button>
    </div>
  );
};

export default Register;
