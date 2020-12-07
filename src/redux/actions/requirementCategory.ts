import { API } from "../../configs";
import { Dispatch } from "../types";

// get seasons
export const GET_REQUIREMENT_CATEGORY_PENDING =
  "GET_REQUIREMENT_CATEGORY_PENDING";
export const GET_REQUIREMENT_CATEGORY_SUCCESS =
  "GET_REQUIREMENT_CATEGORY_SUCCESS";
export const GET_REQUIREMENT_CATEGORY_ERROR = "GET_REQUIREMENT_CATEGORY_ERROR";

export const getRequirementCategory = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_REQUIREMENT_CATEGORY_PENDING });
    const res = await API.getRequirementCategory();
    dispatch({
      type: GET_REQUIREMENT_CATEGORY_SUCCESS,
      payload: { data: res.data.data },
    });
  } catch (err) {
    if (err) {
      dispatch({
        type: GET_REQUIREMENT_CATEGORY_ERROR,
        payload: { data: err },
      });
    } else {
      dispatch({ type: GET_REQUIREMENT_CATEGORY_ERROR });
    }
  }
};
