import Axios from 'axios';
import actionTypes from './action-types';


export const listProducts = () => async (dispatch) => {
  dispatch({
    type: actionTypes.PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/products');
    dispatch({ type: actionTypes.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.PRODUCT_LIST_FAIL, payload: error.message });
  }
};