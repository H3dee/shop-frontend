import { IAction as Action } from "../../interfaces/IAction";
import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes";

export interface InitialAppState {
  loading: boolean;
}

const initialState: InitialAppState = {
  loading: false,
};

export const appReducer = (
  state: InitialAppState = initialState,
  action: Action
) => {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
