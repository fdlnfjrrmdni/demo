import {
  GET_EDUCATION_ERROR,
  GET_EDUCATION_PENDING,
  GET_EDUCATION_SUCCESS,
} from "../actions";
import { Action, EducationState } from "../types";

const initialState: EducationState = {
  data: [],
  isLoading: false,
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // get season
    case GET_EDUCATION_PENDING:
      return { ...state, isLoading: true };
    case GET_EDUCATION_SUCCESS:
      return { ...state, isLoading: false, data: payload.data };
    case GET_EDUCATION_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
