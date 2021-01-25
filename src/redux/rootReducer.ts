import { combineReducers } from "redux";
import { categoryReducer } from "./reducers/categoryReducer";

export const rootReducer = combineReducers({
      category: categoryReducer
})