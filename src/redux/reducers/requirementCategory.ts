import {
  GET_REQUIREMENT_CATEGORY_ERROR,
  GET_REQUIREMENT_CATEGORY_PENDING,
  GET_REQUIREMENT_CATEGORY_SUCCESS,
} from "../actions";
import { Action, RequirementCategoryState } from "../types";

const initialState: RequirementCategoryState = {
  data: [],
  isLoading: false,
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // get season
    case GET_REQUIREMENT_CATEGORY_PENDING:
      return { ...state, isLoading: true };
    case GET_REQUIREMENT_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, data: payload.data };
    case GET_REQUIREMENT_CATEGORY_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
