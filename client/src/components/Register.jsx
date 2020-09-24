import React, { useState } from 'react';
import { http } from '../utils/httpClient';
import { useDispatch } from 'react-redux';
import { dispatchUserData } from '../utils/actions';

const Register = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = async () => {
    const res = await http.post('/user/register', { username: login, password });
    if (res) {
      dispatch(dispatchUserData());
    }
  };

  return (
    <div>
      <input type="text" defaultValue={login} onChange={(e) => setLogin(e.target.value)} />
      <input type="text" defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="button" onClick={() => onSubmit()}>
        Register
      </button>
    </div>
  );
};

export default Register;
