import { combineReducers } from "redux";
import { categoryReducer } from "./category/reducers/categoryReducer";

export const rootReducer = combineReducers({
      category: categoryReducer
})