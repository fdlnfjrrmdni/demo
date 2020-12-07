import { API } from "../../configs";
import { Dispatch } from "../types";

// get seasons
export const GET_EDUCATION_PENDING = "GET_EDUCATION_PENDING";
export const GET_EDUCATION_SUCCESS = "GET_EDUCATION_SUCCESS";
export const GET_EDUCATION_ERROR = "GET_EDUCATION_ERROR";

export const getEducation = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_EDUCATION_PENDING });
    const res = await API.getEducation();
    dispatch({
      type: GET_EDUCATION_SUCCESS,
      payload: { data: res.data.data },
    });
  } catch (err) {
    if (err) {
      dispatch({ type: GET_EDUCATION_ERROR, payload: { data: err } });
    } else {
      dispatch({ type: GET_EDUCATION_ERROR });
    }
  }
};
