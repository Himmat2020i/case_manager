import { combineReducers } from "redux";
import authSlice from "./auth/authSlice";
import { LOGOUT } from "./auth/authAction";
import authApi from "../services/authService";
import { removeAuthToken } from "../helpers/api";

const appReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auths: authSlice.reducer
});

export default (state: any, action: any) => {
  if (action.type === LOGOUT) {
    state = {};
    removeAuthToken();
  }
  return appReducer(state, action);
};
