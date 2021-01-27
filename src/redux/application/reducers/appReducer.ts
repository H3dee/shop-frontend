import { IAction as Action } from "../../interfaces/IAction";
import {
  HIDE_FILTERS_LOADING,
  HIDE_PRODUCTS_LOADING,
  SHOW_FILTERS_LOADING,
  SHOW_PRODUCTS_LOADING,
} from "../actionTypes";

export interface InitialAppState {
  productsLoading: boolean;
  filtersLoading: boolean;
}

const initialState: InitialAppState = {
  productsLoading: false,
  filtersLoading: false,
};

export const appReducer = (
  state: InitialAppState = initialState,
  action: Action
): InitialAppState => {
  switch (action.type) {
    case SHOW_FILTERS_LOADING:
      return {
        ...state,
        filtersLoading: true,
      };
    case HIDE_FILTERS_LOADING:
      return {
        ...state,
        filtersLoading: false,
      };
    case SHOW_PRODUCTS_LOADING:
      return {
        ...state,
        productsLoading: true,
      };
    case HIDE_PRODUCTS_LOADING:
      return {
        ...state,
        productsLoading: false,
      };
    default:
      return state;
  }
};
