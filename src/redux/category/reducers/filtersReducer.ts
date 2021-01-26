import { PriceFilterItem } from "../../interfaces/IPriceFilterItem";
import { ISubCategoriesName as subCategoriesName } from "../../interfaces/ISubCategoryName";
import { FilterAction } from "../actionCreators";
import {
  ADD_PRICE_FILTER,
  ADD_SUBCATEGORY_FILTER,
  CLEAR_FILTERS,
  REMOVE_PRICE_FILTER,
  REMOVE_SUBCATEGORY_FILTER,
} from "../actionsTypes";

export interface InitialFiltersState {
  filtersBySubCategory: subCategoriesName[];
  filtersByPrice: PriceFilterItem[];
}

const initialState: InitialFiltersState = {
  filtersBySubCategory: [],
  filtersByPrice: [],
};

export const filtersReducer = (
  state: InitialFiltersState = initialState,
  action: FilterAction
) => {
  switch (action.type) {
    case ADD_SUBCATEGORY_FILTER:
      return {
        ...state,
        filtersBySubCategory: [...state.filtersBySubCategory, action.payload],
      };
    case ADD_PRICE_FILTER:
      return {
        ...state,
        filtersByPrice: [...state.filtersByPrice, action.payload],
      };
    case REMOVE_SUBCATEGORY_FILTER:
      return {
        ...state,
        filtersBySubCategory: [
          ...state.filtersBySubCategory.filter(
            (filter) => filter !== action.payload
          ),
        ],
      };
    case REMOVE_PRICE_FILTER:
      return {
        ...state,
        filtersByPrice: [
          ...state.filtersByPrice.filter((filter) => filter !== action.payload),
        ],
      };
    case CLEAR_FILTERS:
      return {
        filtersBySubCategory: [],
        filtersByPrice: [],
      };
    default:
      return state;
  }
};
