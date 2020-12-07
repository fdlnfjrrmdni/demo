import { API } from "../../configs";
import { Dispatch } from "../types";

// get seasons
export const GET_MAJOR_PENDING = "GET_MAJOR_PENDING";
export const GET_MAJOR_SUCCESS = "GET_MAJOR_SUCCESS";
export const GET_MAJOR_ERROR = "GET_MAJOR_ERROR";

export const ADD_MAJOR_PENDING = "ADD_MAJOR_PENDING";
export const ADD_MAJOR_SUCCESS = "ADD_MAJOR_SUCCESS";
export const ADD_MAJOR_ERROR = "ADD_MAJOR_ERROR";

export const DELETE_MAJOR_PENDING = "DELETE_MAJOR_PENDING";
export const DELETE_MAJOR_SUCCESS = "DELETE_MAJOR_SUCCESS";
export const DELETE_MAJOR_ERROR = "DELETE_MAJOR_ERROR";

export const getMajor = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_MAJOR_PENDING });

    const res = await API.getMajor();
    dispatch({
      type: GET_MAJOR_SUCCESS,
      payload: { data: res.data.data },
    });
  } catch (err) {
    if (err) {
      dispatch({ type: GET_MAJOR_ERROR, payload: { data: err } });
    } else {
      dispatch({ type: GET_MAJOR_ERROR });
    }
  }
};

export const addMajor = (body: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ADD_MAJOR_PENDING });

    const res = await API.addMajor(body);
    dispatch({ type: ADD_MAJOR_SUCCESS, payload: { data: res.data.data } });
    dispatch(getMajor());
  } catch (err) {
    if (err) {
      dispatch({ type: ADD_MAJOR_ERROR, payload: { data: err } });
    } else {
      dispatch({ type: ADD_MAJOR_ERROR });
    }
  }
};

export const updateMajor = (id: number, body: any) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: DELETE_MAJOR_PENDING });

    const res = await API.updateMajor(id, body);
    dispatch(getMajor());
    dispatch({
      type: DELETE_MAJOR_SUCCESS,
      payload: { data: res.data.data },
    });
  } catch (err) {
    if (err) {
      dispatch({ type: DELETE_MAJOR_ERROR, payload: { data: err } });
    } else {
      dispatch({ type: DELETE_MAJOR_ERROR });
    }
  }
};

export const deleteMajor = (id: number) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: DELETE_MAJOR_PENDING });

    const res = await API.deleteMajor(id);
    dispatch(getMajor());
    dispatch({
      type: DELETE_MAJOR_SUCCESS,
      payload: { data: res.data.data },
    });
  } catch (err) {
    if (err) {
      dispatch({ type: DELETE_MAJOR_ERROR, payload: { data: err } });
    } else {
      dispatch({ type: DELETE_MAJOR_ERROR });
    }
  }
};
