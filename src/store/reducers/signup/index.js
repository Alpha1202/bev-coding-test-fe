import { SIGN_UP_START, SIGN_UP_CLEANUP, SIGN_UP_FAIL, SIGN_UP_SUCCESS } from '../../actionTypes';

import { userStore } from '../../initialState';

const signupReducer = (state = userStore, action) => {
  switch (action.type) {
    case SIGN_UP_START:
      return { ...state, isLoading: true };
    case SIGN_UP_SUCCESS:
      return { ...state, token: action.payload.token, user: action.payload.user, isLoading: false, isSuccessful: true, message: action.message };
    case SIGN_UP_FAIL:
      return { ...state, error: action.payload, isLoading: false, message: action.message };
    case SIGN_UP_CLEANUP:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default signupReducer;