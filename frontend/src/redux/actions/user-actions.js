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
  document.location.location.href = '/signin';
};

export const detailsUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: actionTypes.USER_DETAILS_REQUEST, payload: userId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: actionTypes.USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: actionTypes.USER_DETAILS_FAIL, payload: message });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  dispatch({ type: actionTypes.USER_UPDATE_PROFILE_REQUEST, payload: user });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/users/profile`, user, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: actionTypes.USER_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: actionTypes.USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: actionTypes.USER_UPDATE_PROFILE_FAIL, payload: message });
  }
};

export const listUsers = () => async (dispatch, getState) => {
  dispatch({ type: actionTypes.USER_LIST_REQUEST });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get('/api/users', {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: actionTypes.USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: actionTypes.USER_LIST_FAIL, payload: message });
  }
};