import React from 'react'
import { useHistory } from 'react-router-dom'
import rightArrow from '../../img/icons/Vector 13right-pointer.svg'
import BrandsBlock from './BrandsBlock'
import Filter from './Filter'

const FiltersSection: React.FC = () => {
  const filtersNames = ['Category', 'Price']
  const prices: string[] = ['$0.00 - $1,000.00', '$1,000.00 - $2,000.00']
  const categories: string[] = [
    'CUSTOM PCS',
    'MSI ALL-IN-ONE PCS',
    'HP/COMPAQ PCS',
  ]
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
            <Filter title={filtersNames[1]} items={prices} />
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
