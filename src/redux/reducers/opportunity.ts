import {
  GET_OPPORTUNITY_ERROR,
  GET_OPPORTUNITY_PENDING,
  GET_OPPORTUNITY_SUCCESS,
} from "../actions";
import { Action, OpportunityState } from "../types";

const initialState: OpportunityState = {
  data: [],
  isLoading: false,
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // get season
    case GET_OPPORTUNITY_PENDING:
      return { ...state, isLoading: true };
    case GET_OPPORTUNITY_SUCCESS:
      return { ...state, isLoading: false, data: payload.data };
    case GET_OPPORTUNITY_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
