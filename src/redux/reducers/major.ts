import {
  GET_MAJOR_ERROR,
  GET_MAJOR_PENDING,
  GET_MAJOR_SUCCESS,
  ADD_MAJOR_PENDING,
  ADD_MAJOR_SUCCESS,
  ADD_MAJOR_ERROR,
} from "../actions";
import { Action, MajorState } from "../types";

const initialState: MajorState = {
  data: [],
  isLoading: false,
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case GET_MAJOR_PENDING:
      return { ...state, isLoading: true };
    case GET_MAJOR_SUCCESS:
      return { ...state, isLoading: false, data: payload.data };
    case GET_MAJOR_ERROR:
      return { ...state, isLoading: false };

    case ADD_MAJOR_PENDING:
      return { ...state, isLoadAddMajor: true };
    case ADD_MAJOR_SUCCESS:
      return {
        ...state,
        loadAddMajor: payload.data,
        isLoadAddMajor: false,
      };
    case ADD_MAJOR_ERROR:
      return { ...state, isLoadAddMajor: false };

    default:
      return state;
  }
};
