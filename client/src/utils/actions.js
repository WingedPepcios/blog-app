import { http } from './httpClient';
import { UPDATE_USER } from '../reducers/userReducer';

export const dispatchUserData = () =>
  async function dispatchUserDataPromise(dispatch) {
    const res = await http.get('/user/current');
    if (res) {
      dispatch({
        type: UPDATE_USER,
        payload: res,
      });
    }
  };
