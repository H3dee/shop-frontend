import { Action } from "../actionCreators";
import { OPEN_CATEGORY } from "../actionsTypes";
import { subCategoriesName } from "../interfaces/ISubCategoryName";

interface InitialCategoryState {
  subCategoriesNames: subCategoriesName[];
}

const initialState: InitialCategoryState = {
  subCategoriesNames: [],
};

export const categoryReducer = (
  state: InitialCategoryState = initialState,
  action: Action
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
