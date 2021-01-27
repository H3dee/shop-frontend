import { CategoryAction } from "../actionCreators";
import { OPEN_CATEGORY } from "../actionsTypes";
import { ISubCategoriesName as subCategoriesName } from "../../interfaces/ISubCategoryName";

export interface InitialCategoryState {
  subCategoriesNames: subCategoriesName[];
  parentCategoryId: string | null;
}

const initialState: InitialCategoryState = {
  subCategoriesNames: [],
  parentCategoryId: null,
};

export const categoryReducer = (
  state: InitialCategoryState = initialState,
  action: CategoryAction
): InitialCategoryState => {
  switch (action.type) {
    case OPEN_CATEGORY:
      return {
        ...state,
        subCategoriesNames: action.payload.subCategoriesNames,
        parentCategoryId: action.payload.parentId,
      };
    default:
      return state;
  }
};
