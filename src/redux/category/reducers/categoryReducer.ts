import { CategoryAction } from "../actionCreators";
import { OPEN_CATEGORY } from "../actionsTypes";
import { ISubCategoriesName as subCategoriesName } from "../../interfaces/ISubCategoryName";

export interface InitialCategoryState {
  subCategoriesNames: subCategoriesName[];
}

const initialState: InitialCategoryState = {
  subCategoriesNames: [],
};

export const categoryReducer = (
  state: InitialCategoryState = initialState,
  action: CategoryAction
) => {
  switch (action.type) {
    case OPEN_CATEGORY:
      return {
        ...state,
        subCategoriesNames: action.payload,
      };
    default:
      return state;
  }
};
