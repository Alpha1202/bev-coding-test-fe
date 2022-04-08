import { CHANGE_PASSWORD_START, CHANGE_PASSWORD_CLEANUP, CHANGE_PASSWORD_FAIL, CHANGE_PASSWORD_SUCCESS } from '../../actionTypes';

import { userStore } from '../../initialState';

const changePasswordReducer = (state = userStore, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_START:
      return { ...state, isLoading: true };
    case CHANGE_PASSWORD_SUCCESS:
      return { ...state ,isLoading: false, isSuccessful: true, message: action.message };
    case CHANGE_PASSWORD_FAIL:
      return { ...state, error: action.payload, isLoading: false, message: action.message };
    case CHANGE_PASSWORD_CLEANUP:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default changePasswordReducer;