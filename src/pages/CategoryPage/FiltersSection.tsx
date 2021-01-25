import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import rightArrow from '../../assets/img/icons/Vector 13right-pointer.svg'
import { subCategoriesName } from '../../redux/category/interfaces/ISubCategoryName'
import BrandsBlock from './BrandsBlock'
import Filter from './Filter'

interface RootState{
  category: {
    subCategoriesNames: subCategoriesName[]
  }
}

const FiltersSection: React.FC = () => {
  const filtersNames = ['Category', 'Price']
  const prices: string[] = ['$0 - $1000', '$1000 - $5000', "$5000 - 15000"]
  const categories = useSelector((state: RootState) => state.category.subCategoriesNames)
  const history = useHistory()

  return (
    <div className="list__filters-section">
      <div className="container">
        <div className="list__filters-section__row">
          <div className="list__filters-section__back-btn">
            <div className="back-btn__pointer">
              <img src={rightArrow} alt="" />
            </div>
            <button onClick={() => history.push('/home')}>Back</button>
          </div>
          <div className="list__filters-section__selectors">
            <div className="selectors__title">Filters</div>
            <div className="selectors__clear-btn">
              <button>Clear Filter</button>
            </div>
            <Filter title={filtersNames[0]} items={categories} />
            <Filter title={filtersNames[1]} prices={prices} />
            <div className="selectors__apply-btn">
              <button>Apply Filters (2)</button>
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
