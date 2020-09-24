import React, { useState } from 'react';
import { http } from '../utils/httpClient';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    const res = await http.post('/user/login', { username: login, password });
    console.log(res);
  };

  return (
    <div>
      <input type="text" defaultValue={login} placeholder="Username" onChange={(e) => setLogin(e.target.value)} />
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

export default Login;
