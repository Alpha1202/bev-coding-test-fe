import {
  SIGN_UP_START, SIGN_UP_CLEANUP, SIGN_UP_FAIL, SIGN_UP_SUCCESS
} from "../../actionTypes";
import { API } from "../../../api/index";



const signupStart = () => {
  return { type: SIGN_UP_START };
};
const signupSucess = (payload, message) => {
  return { type: SIGN_UP_SUCCESS, payload, message};
};
const signupFail = (payload) => {
  return { type: SIGN_UP_FAIL, payload };
};
export const signupCleanUp = () => {
  return { type: SIGN_UP_CLEANUP };
};

export const signupRequest = (payload) => {
  return async (dispatch) => {
    dispatch(signupStart());

    try {
      const callObj = {
        method: "POST",
        path: `signup`,
        data: payload,
      };

      const data = await API(callObj);
      if (data.status === 'success') {
        dispatch(signupSucess(data.data, data.message));
        localStorage.setItem('token', JSON.stringify(data.data.token))
       
      } else {
        dispatch(signupFail(data.data, data.message));
      }
       return data
    } catch (e) {
      const error = e?.response?.data?.error;
      let errorResponse;
      if (error) {
        const errorResponses = Object.values(error.errors);
        errorResponse = errorResponses.reduce((acc, i) => acc.concat(i), []);
      } else {
        errorResponse = ["Something went wrong. please try again"];
      }
      dispatch(signupFail([], errorResponse));
    }
  };
};
