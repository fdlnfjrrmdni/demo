// actions
interface Payload {
  data?: any;
}

interface Params {
  type: string;
  payload?: Payload;
}

export type Dispatch = (params: Params | Function) => void;
export type GetState = () => Reducers;

export interface Action {
  type: string;
  payload: Payload;
}

// combine reducers
export interface Reducers {
  home: HomeState;
  user: UserState;
  opportunity: OpportunityState;
  major: MajorState;
  education: EducationState;
  contractType: ContractTypeState;
  requirementCategory: RequirementCategoryState;
}

// reducers
export interface HomeState {
  count: number;
}

export interface UserState {
  data: {
    id: number;
    name: string;
  }[];
  isLoading: boolean;
}

export interface OpportunityState {
  data: {
    id: number;
    name: string;
  }[];
  isLoading: boolean;
}

export interface EducationState {
  data: {
    id: number;
    name: string;
  }[];
  isLoading: boolean;
}

export interface MajorState {
  data: {
    id: number;
    name: string;
  }[];
  isLoading: boolean;
}

export interface ContractTypeState {
  data: {
    id: number;
    name: string;
  }[];
  isLoading: boolean;
}

export interface RequirementCategoryState {
  data: {
    id: number;
    name: string;
  }[];
  isLoading: boolean;
}
