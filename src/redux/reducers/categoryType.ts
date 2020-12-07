import {
  GET_CONTRACT_TYPE_ERROR,
  GET_CONTRACT_TYPE_PENDING,
  GET_CONTRACT_TYPE_SUCCESS,
} from "../actions";
import { Action, ContractTypeState } from "../types";

const initialState: ContractTypeState = {
  data: [],
  isLoading: false,
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // get season
    case GET_CONTRACT_TYPE_PENDING:
      return { ...state, isLoading: true };
    case GET_CONTRACT_TYPE_SUCCESS:
      return { ...state, isLoading: false, data: payload.data };
    case GET_CONTRACT_TYPE_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
