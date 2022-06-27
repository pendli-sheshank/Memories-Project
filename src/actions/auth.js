import * as api from "../api";
import { AUTH, LOGOUT } from "../constants/actionTypes";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // for login user user
    const { data } = await api.signIn(formData);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    //for signup user
    const { data } = await api.signUp(formData);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
