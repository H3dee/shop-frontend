import { Product } from "../../interfaces/IProductCard";
import { IAction as Action } from "../interfaces/IAction";
import {RESET_PRODUCTS, SET_PRODUCTS} from './actionTypes'

interface SetProductAction{
      payload: Product[]
}

export type ProductAction = SetProductAction & Action

export const setProducts = (products: Product[]): ProductAction => ({
      type: SET_PRODUCTS,
      payload: products
})

export const resetProducts = (): Action => ({
      type: RESET_PRODUCTS
})