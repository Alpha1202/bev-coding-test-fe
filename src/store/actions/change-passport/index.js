import {
  CHANGE_PASSPORT_START, CHANGE_PASSPORT_CLEANUP, CHANGE_PASSPORT_FAIL, CHANGE_PASSPORT_SUCCESS
} from "../../actionTypes";
import { API } from "../../../utils/Axios";



const changePassportStart = () => {
  return { type: CHANGE_PASSPORT_START };
};
export const changePassportSucess = (payload, message) => {
  return { type: CHANGE_PASSPORT_SUCCESS, payload, message};
};
const changePassportFail = (payload) => {
  return { type: CHANGE_PASSPORT_FAIL, payload };
};
export const changePassportCleanUp = () => {
  return { type: CHANGE_PASSPORT_CLEANUP };
};

export const changePassportRequest = (payload) => {
  return async (dispatch) => {
    dispatch(changePassportStart());

    try {
      const callObj = {
        method: "POST",
        path: `editprofile`,
        data: payload,
      };

      const data = await API(callObj);

      if (data.status === 'success') {
        dispatch(changePassportSucess(data.data, data.message));
       
        return data.data
      } else {
        dispatch(changePassportFail(data.data, data.message));
      }
    } catch (e) {
      const error = e?.response?.data?.error;
      let errorResponse;
      if (error) {
        const errorResponses = Object.values(error.errors);
        errorResponse = errorResponses.reduce((acc, i) => acc.concat(i), []);
      } else {
        errorResponse = ["Something went wrong. please try again"];
      }
      dispatch(changePassportFail([], errorResponse));
    }
  };
};
