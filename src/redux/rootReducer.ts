import { combineReducers } from "redux";
import { appReducer } from "./application/reducers/appReducer";
import { cartReducer } from "./cart/reducers/cartReducer";
import { categoryReducer } from "./category/reducers/categoryReducer";
import { filtersReducer } from "./category/reducers/filtersReducer";
import { paginationReducer } from "./category/reducers/paginationReducer";
import { productReducer } from "./product/reducers/productReducer";

export const rootReducer = combineReducers({
      category: categoryReducer,
      filters: filtersReducer,
      pagination: paginationReducer, 
      products: productReducer,
      cart: cartReducer,
      app: appReducer
})
