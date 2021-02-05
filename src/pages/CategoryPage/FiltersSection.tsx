import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from '../../redux/interfaces/IRootState'
import {
  applyFilters,
  clearFilters,
  resetCategory,
  resetFilters,
} from '../../redux/category/actionCreators'

import { resetProducts } from '../../redux/product/actionCreators'
import { useTypedSelector } from '../../redux/modules'
import rightArrow from '../../assets/img/icons/Vector 13right-pointer.svg'
import BrandsBlock from './BrandsBlock'
import Filter from './Filter'

const FiltersSection: React.FC = () => {
  const filtersNames = ['Category', 'Price']
  const prices: string[] = [
    '0 - 1000',
    '1000 - 5000',
    '5000 - 50000',
    '50000 - 150000',
  ]
  const categories = useTypedSelector(
    (state) => state.category.subCategoriesNames
  )
  const { filtersBySubCategory, filtersByPrice } = useSelector(
    (state: RootState) => state.filters
  )
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
    if (!filters.length) return

    dispatch(applyFilters(false))
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
