import { API } from "../../configs";
import { Dispatch } from "../types";

// get seasons
export const GET_USER_PENDING = "GET_USER_PENDING";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const getUser = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_USER_PENDING });
    const res = await API.getUser();
    dispatch({
      type: GET_USER_SUCCESS,
      payload: { data: res.data.data },
    });
  } catch (err) {
    if (err) {
      dispatch({ type: GET_USER_ERROR, payload: { data: err } });
    } else {
      dispatch({ type: GET_USER_ERROR });
    }
  }
};
