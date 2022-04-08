import {
	RESET_PASSWORD_START,
	RESET_PASSWORD_CLEANUP,
	RESET_PASSWORD_FAIL,
	RESET_PASSWORD_SUCCESS,
	RESET_PASSWORD_TOKEN_SUCCESS,
	RESET_PASSWORD_TOKEN_FAIL,
} from "../../actionTypes";
import { API } from "../../../api/index";

const resetPasswordStart = () => {
	return { type: RESET_PASSWORD_START };
};
const resetPasswordTokenSucess = (payload, message) => {
	return { type: RESET_PASSWORD_TOKEN_SUCCESS, payload, message };
};
const resetPasswordSucess = (payload, message) => {
	return { type: RESET_PASSWORD_SUCCESS, payload, message };
};
const resetPasswordFail = (payload) => {
	return { type: RESET_PASSWORD_FAIL, payload };
};
const resetPasswordTokenFail = (payload) => {
	return { type: RESET_PASSWORD_TOKEN_FAIL, payload };
};
export const resetPasswordCleanUp = () => {
	return { type: RESET_PASSWORD_CLEANUP };
};

export const resetPasswordTokenRequest = (payload) => {
	return async (dispatch) => {
		dispatch(resetPasswordStart());

		try {
			const callObj = {
				method: "POST",
				path: `sendResetToken`,
				data: payload,
			};
			const data = await API(callObj);

			if (data.status === "success") {
				dispatch(resetPasswordTokenSucess(data.data, data.message));
			} else {
				dispatch(resetPasswordTokenFail(data.data, data.message));
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
			dispatch(resetPasswordTokenFail([], errorResponse));
		}
	};
};

export const resetPasswordRequest = (token, payload) => {
	return async (dispatch) => {
		dispatch(resetPasswordStart());

		try {
			const callObj = {
				method: "POST",
				path: `resetPassword/${token}`,
				data: payload,
			};
			const data = await API(callObj);
			if (data.status === "success") {
				dispatch(resetPasswordSucess(data.data, data.message));
			
			} else {
				dispatch(resetPasswordFail(data.data, data.message));
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
			dispatch(resetPasswordFail([], errorResponse));
		}
	};
};
