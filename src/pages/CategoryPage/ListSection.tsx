import React from "react";
import gridIcon from "../../img/icons/Group 201grid-icon.svg";
import lineIcon from "../../img/icons/Frame 50line-type.svg";
import rightArrow from "../../img/icons/Vector 13right-pointer.svg";
import cancelIcon from '../../img/icons/Group 108cancel.svg'
import tempImg from '../../img/image 29test.png'
import ProductCard from "../../components(shared)/ProductCard";

const ListSection: React.FC = () => {
  return (
    <div className="list__body">
      <div className="container">
        <div className="list__body__row">
          <div className="body__top">
            <div className="top__items-count-info">
              <div className="items-count-info__text">
                Items <span className="current">1-35</span> of
                <span className="all">61</span>
              </div>
            </div>
            <div className="top__sort-menu">
              <div className="sort-menu__placeholder">
                <div className="text">Sort by</div>:
                <div className="selected">Position</div>
                <div className="arrow">
                  <img src={rightArrow} alt=" " />
                </div>
              </div>
            </div>
            <div className="top__show-amount">
              <div className="top__show-amount__placeholder">
                <div className="text">Show:</div>
                <div className="selected">
                  <span>35</span> per page
                </div>
                <div className="arrow">
                  <img src={rightArrow} alt=" " />
                </div>
              </div>
            </div>
            <div className="top__display-type-btns">
              <div className="grid-type active">
                <img src={gridIcon} alt="" />
              </div>
              <div className="grid-type">
                <img src={lineIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="body__applied-filters">
            <div className="applied-filters__item">
              <div className="item__name">CUSTOM PCS</div>
              <div className="item__cancel-icon">
                <img src={cancelIcon} alt=" " />
              </div>
            </div>
            <div className="applied-filters__item">
              <div className="item__name">HP/COMPAQ PCS</div>
              <div className="item__cancel-icon">
                <img src={cancelIcon} alt=" " />
              </div>
            </div>
            <div className="applied-filters__clear-btn">
              <button>Clear All</button>
            </div>
          </div>
          <div className="body__products">
            <ProductCard imageUrl={tempImg}/>
            <ProductCard imageUrl={tempImg}/>
            <ProductCard imageUrl={tempImg}/>
            <ProductCard imageUrl={tempImg}/>
            <ProductCard imageUrl={tempImg}/>
            {/* <ProductCard imageUrl={tempImg}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSection;
