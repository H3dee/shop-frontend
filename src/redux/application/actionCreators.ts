import { IAction as Action } from "../interfaces/IAction";
import {
  HIDE_FILTERS_LOADING,
  HIDE_PRODUCTS_LOADING,
  SHOW_FILTERS_LOADING,
  SHOW_PRODUCTS_LOADING,
} from "./actionTypes";

export const showProductsLoading = (): Action => ({
  type: SHOW_PRODUCTS_LOADING,
});

export const hideProductsLoading = (): Action => ({
  type: HIDE_PRODUCTS_LOADING,
});

export const showFiltersLoading = (): Action => ({
  type: SHOW_FILTERS_LOADING,
});

export const hideFiltersLoading = (): Action => ({
  type: HIDE_FILTERS_LOADING,
});
