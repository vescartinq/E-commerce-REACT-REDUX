import actionTypes from "../actions/action-types";

  
  export const productListReducer = (
    state = { loading: true, products: [] },
    action = {}
  ) => {
    switch (action.type) {
      case actionTypes.PRODUCT_LIST_REQUEST:
        return { loading: true };
      case actionTypes.PRODUCT_LIST_SUCCESS:
        return { loading: false, products: action.payload };
      case actionTypes.PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };