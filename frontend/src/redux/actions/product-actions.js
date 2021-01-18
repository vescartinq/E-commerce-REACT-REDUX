/* eslint-disable no-unused-vars */
import Axios from 'axios';
import actionTypes from './action-types';

export const listProducts = ({
  name = '',
  category = '',
}) => async (dispatch) => {
  dispatch({
    type: actionTypes.PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `/api/products?name=${name}&category=${category}`
    );
    dispatch({ type: actionTypes.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({ type: actionTypes.PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({ type: actionTypes.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductCategories = () => async (dispatch) => {
  dispatch({
    type: actionTypes.PRODUCT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/products/categories`);
    dispatch({ type: actionTypes.PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.PRODUCT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};


export const createProduct = () => async (dispatch, getState) => {
  dispatch({ type: actionTypes.PRODUCT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/products',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: actionTypes.PRODUCT_CREATE_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: actionTypes.PRODUCT_CREATE_FAIL, payload: message });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  dispatch({ type: actionTypes.PRODUCT_UPDATE_REQUEST, payload: product });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/products/${product._id}`, product, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: actionTypes.PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: actionTypes.PRODUCT_UPDATE_FAIL, error: message });
  }
};

export const deleteProduct = (productId) => async (dispatch, getState) => {
  dispatch({ type: actionTypes.PRODUCT_DELETE_REQUEST, payload: productId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/products/${productId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: actionTypes.PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: actionTypes.PRODUCT_DELETE_FAIL, payload: message });
  }
};