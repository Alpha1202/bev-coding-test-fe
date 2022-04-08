import {
  CHANGE_PASSWORD_START, CHANGE_PASSWORD_CLEANUP, CHANGE_PASSWORD_FAIL, CHANGE_PASSWORD_SUCCESS 
} from "../../actionTypes";
import { API } from "../../../api/index";


const changePasswordStart = () => {
  return { type: CHANGE_PASSWORD_START };
};
const changePasswordSucess = (payload, message) => {
  return { type: CHANGE_PASSWORD_SUCCESS, payload, message};
};
const changePasswordFail = (payload) => {
  return { type: CHANGE_PASSWORD_FAIL, payload };
};
export const changePasswordCleanUp = () => {
  return { type: CHANGE_PASSWORD_CLEANUP };
};

export const changePasswordRequest =  (payload) => {
  return async (dispatch) => {
    dispatch(changePasswordStart());

    try {
      const token = await JSON.parse(localStorage.getItem("token"));
      console.log(token);
      const callObj = {
        method: "POST",
        path: `changePassword`,
        data: payload,
        token
      };

      const data = await API(callObj);

      if (data.status === 'success') {
        dispatch(changePasswordSucess(data.data, data.message));
        // localStorage.setItem('token', data.data.token)
        
      } else {
        dispatch(changePasswordFail(data.data, data.message));
      }
      return data;
    } catch (e) {
      const error = e?.response?.data?.error;
      let errorResponse;
      if (error) {
        const errorResponses = Object.values(error.errors);
        errorResponse = errorResponses.reduce((acc, i) => acc.concat(i), []);
      } else {
        errorResponse = ["Something went wrong. please try again"];
      }
      dispatch(changePasswordFail([], errorResponse));
    }
  };
};
