import { store } from '../store'
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'
import {
  ADD_PRICE_FILTER,
  ADD_SUBCATEGORY_FILTER,
  CLEAR_FILTERS,
  OPEN_CATEGORY,
  REMOVE_PRICE_FILTER,
  REMOVE_SUBCATEGORY_FILTER,
  RESET_CATEGORY,
  RESET_FILTERS,
  RESET_PAGINATION,
  SET_PAGINATION,
} from './actionsTypes'
import {
  Category as CategoryDTO,
  Product as ProductDTO,
} from '../../api/generated'
import { ISubCategoriesName as subCategoriesName } from '../interfaces/ISubCategoryName'
import axios from 'axios'
import { IAction as Action } from '../interfaces/IAction'
import {
  hideFiltersLoading,
  hideProductsLoading,
  showFiltersLoading,
  showProductsLoading,
} from '../application/actionCreators'
import { PriceFilterItem } from '../interfaces/IPriceFilterItem'
import { setProducts } from '../product/actionCreators'
import { getProductImage } from '../../util/getImage'
import { RootState } from '../interfaces/IRootState'
import { PaginationPayload } from '../interfaces/IPagintaion'

const qs = require('qs')

//Categories
interface SetAction {
  payload: {
    subCategoriesNames: subCategoriesName[]
    parentId: string | null
  }
}

export type CategoryAction = SetAction & Action

export const openCategory = (
  id: string
): ThunkAction<void, typeof store, unknown, AnyAction> => async (dispatch) => {
  const query = qs.stringify(
    {
      _where: [{ 'parent.id': id }],
      _limit: 12,
    },
    { encode: false }
  )

  dispatch(showFiltersLoading())
  axios
    .get<CategoryDTO[]>(`/categories?${query}`, {
      headers: {
        accept: 'application/json',
      },
    })
    .then((res) => {
      dispatch({
        type: OPEN_CATEGORY,
        payload: {
          subCategoriesNames: res.data.map((category) => ({
            id: category.id,
            name: category.name,
          })),
          parentId: id,
        },
      })
      dispatch(hideFiltersLoading())
    })
    .catch((err) => console.log(err))
}

export const resetCategory = (): Action => ({
  type: RESET_CATEGORY,
})

//Filters
type Filter = subCategoriesName | PriceFilterItem

interface SetFilterAction {
  payload: Filter
}

export type FilterAction = SetFilterAction & Action

export const addSubcategoryFilter = (filter: Filter): FilterAction => ({
  type: ADD_SUBCATEGORY_FILTER,
  payload: filter,
})

export const removeSubcategoryFilter = (filter: Filter): FilterAction => ({
  type: REMOVE_SUBCATEGORY_FILTER,
  payload: filter,
})

export const addPriceFilter = (filter: Filter): FilterAction => ({
  type: ADD_PRICE_FILTER,
  payload: filter,
})

export const removePriceFilter = (filter: Filter): FilterAction => ({
  type: REMOVE_PRICE_FILTER,
  payload: filter,
})

export const resetFilters = (): Action => ({
  type: RESET_FILTERS,
})

export const clearFilters = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => (dispatch, getState) => {
  const defaultCategory = getState().category

  dispatch({
    type: CLEAR_FILTERS,
  })
  const query = qs.stringify({
    _where: {
      _or: [
        { 'category.id': defaultCategory.parentCategoryId },
        ...defaultCategory.subCategoriesNames.map((subCategory) => ({
          'category.id': subCategory.id,
        })),
      ],
    },
    _limit: 20,
  })

  dispatch(showProductsLoading())
  axios
    .get<ProductDTO[]>(`/products?${query}`, {
      headers: {
        accept: 'application/json',
      },
    })
    .then((res) => {
      dispatch(
        setProducts(
          res.data.map((product) => ({
            id: product.id,
            imageUrl: getProductImage(product),
            productName: product.name,
            price: product.price,
          }))
        )
      )
      dispatch(hideProductsLoading())
    })
    .catch((err) => console.log(err))
}

//Pagination
interface SetPaginationAction {
  payload: PaginationPayload
}

export type PaginationAction = Action & SetPaginationAction

export const setPagination = (
  options: PaginationPayload
): PaginationAction => ({
  type: SET_PAGINATION,
  payload: { ...options },
})

export const resetPagination = (): Action => ({
  type: RESET_PAGINATION
})