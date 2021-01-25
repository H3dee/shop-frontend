import { store } from "../store";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { OPEN_CATEGORY } from "./actionsTypes";
import { Category as CategoryDTO } from "../../api/generated";
import { subCategoriesName } from "./interfaces/ISubCategoryName";

const qs = require("qs");

export interface SetAction {
  type: string;
  payload: subCategoriesName[];
}

export type Action = SetAction;

export const openCategory = (
  id: string
): ThunkAction<void, typeof store, unknown, AnyAction> => async (dispatch) => {
  const query = qs.stringify({
    _where: [{ "parent.id": id }],
    _limit: 12,
  });
  const response = await fetch(`/category?${query}`, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  const data: CategoryDTO[] = await response.json();

  return {
    type: OPEN_CATEGORY,
    payload: data.map((category) => ({
      id: category.id,
      name: category.name,
    })),
  };
};
