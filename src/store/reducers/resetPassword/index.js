import { RESET_PASSWORD_START, RESET_PASSWORD_CLEANUP, RESET_PASSWORD_FAIL, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_TOKEN_SUCCESS, RESET_PASSWORD_TOKEN_FAIL } from '../../actionTypes';

import { userStore } from '../../initialState';

const resetPasswordReducer = (state = userStore, action) => {
  switch (action.type) {
    case RESET_PASSWORD_START:
      return { ...state, isLoading: true };
    case RESET_PASSWORD_TOKEN_SUCCESS:
      return { ...state, isLoading: false, resetPaaswordToken: action.payload.token, resetPaaswordTempToken: action.payload.tempToken };
    case RESET_PASSWORD_TOKEN_FAIL:
      return { ...state, error: action.payload, isLoading: false, message: action.message };
    case RESET_PASSWORD_SUCCESS:
      return { ...state, isLoading: false, isSuccessful: true, message: action.message };
    case RESET_PASSWORD_FAIL:
      return { ...state, error: action.payload, isLoading: false, message: action.message };
    case RESET_PASSWORD_CLEANUP:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default resetPasswordReducer;

