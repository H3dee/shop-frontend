import { Product } from "../../interfaces/IProductCard";
import { IAction as Action } from "../interfaces/IAction";
import {SET_PRODUCTS} from './actionTypes'

interface SetProductAction{
      payload: Product[]
}

export type ProductAction = SetProductAction & Action

export const setProducts = (products: Product[]): ProductAction => ({
      type: SET_PRODUCTS,
      payload: products
})