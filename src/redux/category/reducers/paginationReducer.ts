import { PaginationPayload } from '../../interfaces/IPagintaion'
import { PaginationAction } from '../actionCreators'
import {
  RESET_PAGINATION,
  SET_PAGINATION,
} from '../actionsTypes'

export type InitialPaginationState = PaginationPayload

const initialState: InitialPaginationState = {
  currentPage: 0,
  pagesAmount: 0,
  productsAmount: 0,
}

export const paginationReducer = (
  state: InitialPaginationState = initialState,
  action: PaginationAction
): InitialPaginationState => {
  switch (action.type) {
    case SET_PAGINATION:
      return {
        currentPage: action.payload.currentPage,
        pagesAmount: action.payload.pagesAmount,
        productsAmount: action.payload.productsAmount,
      }
    case RESET_PAGINATION:
      return {
        currentPage: 0,
        pagesAmount: 0,
        productsAmount: 0,
      }
    default:
      return state
  }
}
