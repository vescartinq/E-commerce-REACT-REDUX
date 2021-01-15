import Axios from 'axios';
import actionTypes from './action-types';

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: actionTypes.ORDER_CREATE_REQUEST, payload: order });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.post('/api/orders', order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: actionTypes.ORDER_CREATE_SUCCESS, payload: data.order });
    dispatch({ type: actionTypes.CART_EMPTY });
    localStorage.removeItem('cartItems');
  } catch (error) {
    dispatch({
      type: actionTypes.ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};