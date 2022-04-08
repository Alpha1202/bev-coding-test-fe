import { combineReducers } from "redux";

import login from "./login";
import changePassword from "./changepassword";
import resetPassword from "./resetPassword";
import signup from "./signup";
import changePassport from "./changePassport";

export default combineReducers({
	login,
  signup,
  changePassword,
  resetPassword,
  changePassport
});
