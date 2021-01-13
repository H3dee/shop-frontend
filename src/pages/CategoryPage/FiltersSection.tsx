import React from "react";
import rightArrow from "../../img/icons/Vector 13right-pointer.svg";
import BrandsBlock from "./BrandsBlock";

const FiltersSection: React.FC = () => {
  return (
    <div className="list__filters-section">
      <div className="container">
        <div className="list__filters-section__row">
          <div className="list__filters-section__back-btn">
            <div className="back-btn__pointer">
              <img src={rightArrow} alt="" />
            </div>
            <button>Back</button>
          </div>
          <div className="list__filters-section__selectors">
            <div className="selectors__title">Filters</div>
            <div className="selectors__clear-btn">
              <button>Clear Filter</button>
            </div>
            <div className="selectors__category-filter">
              <div className="category-filter__placeholder">
                <span className="title">Category</span>
                <span className="arrow">
                  <img src={rightArrow} alt=" " />
                </span>
              </div>
              <div className="category-filter__expanded">
                <div className="category-filter__item">
                  <span className="name">CUSTOM PCS</span>
                </div>
                <div className="category-filter__item">
                  <span className="name">MSI ALL-IN-ONE PCS</span>
                </div>
                <div className="category-filter__item">
                  <span className="name">HP/COMPAQ PCS</span>
                </div>
              </div>
            </div>
            <div className="selectors__price-filter">
              <div className="price-filter__placeholder">
                <span className="title">Price</span>
                <span className="arrow">
                  <img src={rightArrow} alt=" " />
                </span>
              </div>
              <div className="price-filter__expanded">
                <div className="price-filter__item">
                  <span className="name">$0.00 - $1,000.00</span>
                </div>
                <div className="price-filter__item">
                  <span className="name">$1,000.00 - $2,000.00</span>
                </div>
                <div className="price-filter__item">
                  <span className="name">$1,000.00 - $2,000.00</span>
                </div>
                <div className="price-filter__item">
                  <span className="name">$1,000.00 - $2,000.00</span>
                </div>
                <div className="price-filter__item">
                  <span className="name">$1,000.00 - $2,000.00</span>
                </div>
                <div className="price-filter__item">
                  <span className="name">$1,000.00 - $2,000.00</span>
                </div>
                <div className="price-filter__item">
                  <span className="name">$1,000.00 - $2,000.00</span>
                </div>
                <div className="price-filter__item">
                  <span className="name">$1,000.00 - $2,000.00</span>
                </div>
              </div>
            </div>

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
  );
};

export default FiltersSection;
