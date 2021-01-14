import Axios from 'axios';
import actionTypes from '../actions/action-types';

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_REGISTER_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post('/api/users/register', {
      name,
      email,
      password,
    });
    dispatch({ type: actionTypes.USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: actionTypes.USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post('/api/users/signin', { email, password });
    dispatch({ type: actionTypes.USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('shippingAddress');
  dispatch({ type: actionTypes.USER_SIGNOUT });
};