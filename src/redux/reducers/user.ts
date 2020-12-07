import { GET_USER_ERROR, GET_USER_PENDING, GET_USER_SUCCESS } from "../actions";
import { Action, UserState } from "../types";

const initialState: UserState = {
  data: [],
  isLoading: false,
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // get season
    case GET_USER_PENDING:
      return { ...state, isLoading: true };
    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, data: payload.data };
    case GET_USER_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
