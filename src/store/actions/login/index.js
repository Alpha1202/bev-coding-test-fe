import {
  LOGIN_START, LOGIN_CLEANUP, LOGIN_FAIL, LOGIN_SUCCESS
} from "../../actionTypes";
import { API } from "../../../api/index";


const loginStart = () => {
  return { type: LOGIN_START };
};
const loginSucess = (payload, message) => {
  return { type: LOGIN_SUCCESS, payload, message};
};
const loginFail = (payload) => {
  return { type: LOGIN_FAIL, payload };
};
export const loginCleanUp = () => {
  return { type: LOGIN_CLEANUP };
};

export const loginRequest = (payload) => {
  return async (dispatch) => {
    dispatch(loginStart());

    try {
      const callObj = {
        method: "POST",
        path: `login`,
        data: payload,
      };

      const data = await API(callObj);

      if (data.status === 'success') {
        dispatch(loginSucess(data.data, data.message));
        localStorage.setItem('token', JSON.stringify(data.data.token))
       
      } else {
        dispatch(loginFail(data.data, data.message));
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
      dispatch(loginFail([], errorResponse));
    }
  };
};
