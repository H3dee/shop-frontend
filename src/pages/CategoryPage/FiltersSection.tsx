import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from '../../redux/interfaces/IRootState'
import {
  clearFilters,
  resetCategory,
  resetFilters,
} from '../../redux/category/actionCreators'
import { Product as ProductDTO } from '../../api/generated'
import { useHttp } from '../../hooks/http.hook'
import { resetProducts, setProducts } from '../../redux/product/actionCreators'
import {
  hideProductsLoading,
  showProductsLoading,
} from '../../redux/application/actionCreators'
import { getProductImage } from '../../util/getImage'
import rightArrow from '../../assets/img/icons/Vector 13right-pointer.svg'
import BrandsBlock from './BrandsBlock'
import Filter from './Filter'

const qs = require('qs')

const FiltersSection: React.FC = () => {
  const filtersNames = ['Category', 'Price']
  const prices: string[] = ['0 - 1000', '1000 - 5000', '5000 - 15000']
  const categories = useSelector(
    (state: RootState) => state.category.subCategoriesNames
  )
  const { filtersBySubCategory, filtersByPrice } = useSelector(
    (state: RootState) => state.filters
  )
  const { request } = useHttp()
  const history = useHistory()
  const dispatch = useDispatch()
  const filters = [...filtersBySubCategory, ...filtersByPrice]

  const backBtnHandler = () => {
    dispatch(resetFilters())
    dispatch(resetCategory())
    dispatch(resetProducts())
    history.push('/home')
  }

  const applyBtnHandler = async () => {
    try {
      if (!filters.length) return

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
        query = qs.stringify({
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
        }, {encode: false})

        // console.log(query)
        // console.log([
        //   ...filtersBySubCategory
        //     .map((subCategoryFilter) =>
        //       selectedPrices.map((price) => [
        //         { 'category.id': subCategoryFilter.id },
        //         ...price,
        //       ])
        //     )
        //     .flat(),
        // ])
      } else if (
        filtersBySubCategory.length &&
        !filtersByPrice.length &&
        !query
      ) {
        query = qs.stringify({
          _where: {
            _or: [
              ...filtersBySubCategory.map((filter) => ({
                'category.id': filter.id,
              })),
            ],
          },
        })
      } else if (
        !filtersBySubCategory.length &&
        filtersByPrice.length &&
        !query
      ) {
        query = qs.stringify({
          _where: {
            _or: [
              ...categories
                .map((category) =>
                  selectedPrices.map((priceItem) => [
                    { 'category.id': category.id },
                    ...priceItem,
                  ])
                )
                .flat(),
            ],
          },
        })
      }

      dispatch(showProductsLoading())
      const products: ProductDTO[] = await request(`/products?${query}`, 'GET')
      dispatch(
        products.length &&
          setProducts(
            products.map((product) => ({
              id: product.id,
              imageUrl: getProductImage(product),
              productName: product.name,
              price: product.price,
            }))
          )
      )

      dispatch(hideProductsLoading())
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="list__filters-section">
      <div className="container">
        <div className="list__filters-section__row">
          <div className="list__filters-section__back-btn">
            <div className="back-btn__pointer">
              <img src={rightArrow} alt="" />
            </div>
            <button onClick={backBtnHandler}>Back</button>
          </div>
          <div className="list__filters-section__selectors">
            <div className="selectors__title">Filters</div>
            <div className="selectors__clear-btn">
              <button
                onClick={() => filters.length && dispatch(clearFilters())}
              >
                Clear Filter
              </button>
            </div>
            {categories.length ? (
              <Filter title={filtersNames[0]} items={categories} />
            ) : null}
            <Filter title={filtersNames[1]} prices={prices} />
            <div className="selectors__apply-btn">
              <button onClick={applyBtnHandler}>
                Apply Filters
                {filters.length ? (
                  <span className="filters-amount">({filters.length})</span>
                ) : null}
              </button>
            </div>
          </div>
          <BrandsBlock />
          <div className="list__filters-section__compare">
            <div className="compare__title">Compare Products</div>
            <div className="compare__body">You have no items to compare.</div>
          </div>
          <div className="list__filters-section__wish-list">
            <div className="wish-list__title">My Wish Lists</div>
            <div className="wish-list__body">
              You have no items in your wish list.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FiltersSection
