import { LOGIN_START, LOGIN_CLEANUP, LOGIN_FAIL, LOGIN_SUCCESS } from '../../actionTypes';

import { userStore } from '../../initialState';

const loginReducer = (state = userStore, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload.token, user: action.payload.user, isLoading: false, isSuccessful: true, message: action.message };
    case LOGIN_FAIL:
      return { ...state, error: action.payload, isLoading: false, message: action.message };
    case LOGIN_CLEANUP:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default loginReducer;