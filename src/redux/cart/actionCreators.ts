import { IAction as Action } from '../interfaces/IAction'
import { CartItem } from '../interfaces/ICartItem'
import {
  ADD_PRODUCT,
  CLEAR_CART,
  REMOVE_PRODUCT,
  UPDATE__PRODUCT,
} from './actionTypes'

interface SetCartAction {
  payload: CartItem
}

export type CartAction = Action & SetCartAction

export const addProduct = (product: CartItem): CartAction => ({
  type: ADD_PRODUCT,
  payload: product,
})

export const removeProduct = (product: CartItem): CartAction => ({
  type: REMOVE_PRODUCT,
  payload: product,
})

export const updateProduct = (product: CartItem): CartAction => ({
  type: UPDATE__PRODUCT,
  payload: product,
})

export const clearCart = (): Action => ({
  type: CLEAR_CART,
})
