import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { dispatchUserData } from './utils/actions';
import Register from './components/Register';

function App() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    dispatch(dispatchUserData());
  }, [dispatch]);

  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
