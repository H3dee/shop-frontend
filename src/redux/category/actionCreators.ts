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
import { PaginationPayload } from '../interfaces/IPagintaion'
import { AppThunk } from '../modules'
import { InitialFiltersState } from './reducers/filtersReducer'

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

export const applyFilters = (isLimited?: boolean): AppThunk => (
  dispatch,
  getState
) => {
  const {
    parentCategoryId,
    subCategoriesNames: subCategories,
  } = getState().category
  const {
    filtersByPrice,
    filtersBySubCategory,
  }: InitialFiltersState = getState().filters
  const { currentPage } = getState().pagination

  let query = null

  const selectedPrices = [
    ...filtersByPrice
      .map(({ name: value }) => value.split('-'))
      .map((priceValues) => [
        { price_gte: priceValues[0].trim() },
        { price_lt: priceValues[1].trim() },
      ]),
  ]

  if (filtersBySubCategory.length && filtersByPrice.length && !query) {
    query = qs.stringify(
      {
        _where: {
          _or: [
            ...filtersBySubCategory
              .map((subCategoryFilter) =>
                selectedPrices.map((price) => [
                  { 'category.id': subCategoryFilter.id },
                  ...price,
                ])
              )
              .flat(),
          ],
        },
        _limit: isLimited ? 10 : 100000,
        _start: (currentPage - 1) * 10,
      },
      { encode: false }
    )
  } else if (filtersBySubCategory.length && !filtersByPrice.length && !query) {
    query = qs.stringify({
      _where: {
        _or: [
          ...filtersBySubCategory.map((filter) => ({
            'category.id': filter.id,
          })),
        ],
      },
      _limit: isLimited ? 10 : 100000,
      _start: (currentPage - 1) * 10,
    })
  } else if (!filtersBySubCategory.length && filtersByPrice.length && !query) {
    query = qs.stringify({
      _where: {
        _or: subCategories.length
          ? [
              ...subCategories.flatMap((subCategory) =>
                selectedPrices.map((priceItem) => [
                  { 'category.id': subCategory.id },
                  ...priceItem,
                ])
              ),
            ]
          : [
              ...selectedPrices.map((priceItem) => [
                { 'category.id': parentCategoryId },
                ...priceItem,
              ]),
            ],
      },
      _limit: isLimited ? 10 : 100000,
      _start: (currentPage - 1) * 10,
    })
  }

  dispatch(showProductsLoading())
  axios
    .get<ProductDTO[]>(`/products?${query}`, {
      headers: {
        accept: 'application/json',
      },
    })
    .then((res) => {
      !isLimited &&
        res.data.length &&
        dispatch(
          setPagination({
            currentPage: 1,
            pagesAmount: Math.ceil(res.data.length / 10),
            productsAmount: res.data.length,
          })
        )
      res.data.length &&
        dispatch(
          setProducts(
            res.data.splice(0, 10).map((product) => ({
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

export const clearFilters = (): AppThunk => (dispatch, getState) => {
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
  })

  dispatch(showProductsLoading())
  axios
    .get<ProductDTO[]>(`/products?${query}`, {
      headers: {
        accept: 'application/json',
      },
    })
    .then((res) => {
      res.data.length &&
        dispatch(
          setPagination({
            currentPage: 1,
            pagesAmount: Math.ceil(res.data.length / 10),
            productsAmount: res.data.length,
          })
        )

      res.data.length &&
        dispatch(
          setProducts(
            res.data.splice(0, 10).map((product) => ({
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
  type: RESET_PAGINATION,
})
