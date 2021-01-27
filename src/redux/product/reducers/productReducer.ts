import { Product } from "../../../interfaces/IProductCard";
import { ProductAction } from "../actionCreators";
import { RESET_PRODUCTS, SET_PRODUCTS } from "../actionTypes";

export interface InitialProductState {
  products: Product[];
}

const initialState: InitialProductState = {
  products: [],
};

export const productReducer = (
  state: InitialProductState = initialState,
  action: ProductAction
): InitialProductState => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };
    case RESET_PRODUCTS:
      return {
        products: [],
      };
    default:
      return state;
  }
};
