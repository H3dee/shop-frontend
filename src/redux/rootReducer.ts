import { combineReducers } from "redux";
import { appReducer } from "./application/reducers/appReducer";
import { categoryReducer } from "./category/reducers/categoryReducer";
import { filtersReducer } from "./category/reducers/filtersReducer";

export const rootReducer = combineReducers({
      category: categoryReducer,
      filters: filtersReducer, 
      app: appReducer
})