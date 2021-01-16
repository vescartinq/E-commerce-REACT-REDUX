import actionTypes from "../actions/action-types";

export const userRegisterReducer = (state = {}, action={}) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER_REQUEST:
      return { loading: true };
    case actionTypes.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actionTypes.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case actionTypes.USER_SIGNIN_REQUEST:
      return { loading: true };
    case actionTypes.USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actionTypes.USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { loading: true }, action={}) => {
  switch (action.type) {
    case actionTypes.USER_DETAILS_REQUEST:
      return { loading: true };
    case actionTypes.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case actionTypes.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action={}) => {
  switch (action.type) {
    case actionTypes.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case actionTypes.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true };
    case actionTypes.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const userListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case actionTypes.USER_LIST_REQUEST:
      return { loading: true };
    case actionTypes.USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case actionTypes.USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
