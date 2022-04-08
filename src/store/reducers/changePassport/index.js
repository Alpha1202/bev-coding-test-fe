import { CHANGE_PASSPORT_START, CHANGE_PASSPORT_CLEANUP, CHANGE_PASSPORT_FAIL, CHANGE_PASSPORT_SUCCESS } from '../../actionTypes';

import { userStore } from '../../initialState';

const changePassportReducer = (state = userStore, action) => {
  switch (action.type) {
    case CHANGE_PASSPORT_START:
      return { ...state, isLoading: true };
    case CHANGE_PASSPORT_SUCCESS:
      return { ...state, token: action.payload.token, user: action.payload.user, isLoading: false, isSuccessful: true, message: action.message };
    case CHANGE_PASSPORT_FAIL:
      return { ...state, error: action.payload, isLoading: false, message: action.message };
    case CHANGE_PASSPORT_CLEANUP:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default changePassportReducer;