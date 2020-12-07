import { API } from "../../configs";
import { Dispatch } from "../types";

// get seasons
export const GET_OPPORTUNITY_PENDING = "GET_OPPORTUNITY_PENDING";
export const GET_OPPORTUNITY_SUCCESS = "GET_OPPORTUNITY_SUCCESS";
export const GET_OPPORTUNITY_ERROR = "GET_OPPORTUNITY_ERROR";

export const getOpportunity = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_OPPORTUNITY_PENDING });
    const res = await API.getOpportunity();
    dispatch({
      type: GET_OPPORTUNITY_SUCCESS,
      payload: { data: res.data.data },
    });
  } catch (err) {
    if (err) {
      dispatch({ type: GET_OPPORTUNITY_ERROR, payload: { data: err } });
    } else {
      dispatch({ type: GET_OPPORTUNITY_ERROR });
    }
  }
};
