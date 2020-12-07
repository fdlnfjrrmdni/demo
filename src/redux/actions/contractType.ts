import { API } from "../../configs";
import { Dispatch } from "../types";

// get seasons
export const GET_CONTRACT_TYPE_PENDING = "GET_CONTRACT_TYPE_PENDING";
export const GET_CONTRACT_TYPE_SUCCESS = "GET_CONTRACT_TYPE_SUCCESS";
export const GET_CONTRACT_TYPE_ERROR = "GET_CONTRACT_TYPE_ERROR";

export const getContractType = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_CONTRACT_TYPE_PENDING });
    const res = await API.getContractType();
    dispatch({
      type: GET_CONTRACT_TYPE_SUCCESS,
      payload: { data: res.data.data },
    });
  } catch (err) {
    if (err) {
      dispatch({ type: GET_CONTRACT_TYPE_ERROR, payload: { data: err } });
    } else {
      dispatch({ type: GET_CONTRACT_TYPE_ERROR });
    }
  }
};
