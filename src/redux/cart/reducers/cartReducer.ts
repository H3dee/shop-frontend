import { CartItem } from "../../interfaces/ICartItem";
import { CartAction } from "../actionCreators";
import {
  ADD_PRODUCT,
  CLEAR_CART,
  REMOVE_PRODUCT,
  UPDATE__PRODUCT,
} from "../actionTypes";

export interface InitialCartState {
  products: CartItem[];
}

const initialState: InitialCartState = {
  products: [],
};

export const cartReducer = (
  state: InitialCartState = initialState,
  action: CartAction
): InitialCartState => {
  switch (action.type) {
    case ADD_PRODUCT:
      const doesExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      return doesExist
        ? {
            ...state,
          }
        : {
            ...state,
            products: [...state.products, action.payload],
          };
    case UPDATE__PRODUCT:
      const products = [...state.products];
      products.forEach((product) =>
        product.id === action.payload.id
          ? (product.amount = action.payload.amount)
          : null
      );
      return {
        ...state,
        products: [...products],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter(
            (product) => product.id !== action.payload.id
          ),
        ],
      };
    case CLEAR_CART:
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
};
