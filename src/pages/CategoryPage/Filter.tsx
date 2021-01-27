import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterProps } from "../../interfaces/IFilter";
import { RootState } from "../../redux/interfaces/IRootState";
import rightArrow from "../../assets/img/icons/Vector 13right-pointer.svg";
import Loader from "../../components(shared)/Loader";
import {
  addPriceFilter,
  addSubcategoryFilter,
} from "../../redux/category/actionCreators";

const Filter: React.FC<FilterProps> = ({ title, items, prices }) => {
  const [isOpen, setIsOpen] = useState(true);
  const filters = useSelector((state: RootState) => state.filters);
  const loading = useSelector((state: RootState) => state.app.filtersLoading);
  const dispatch = useDispatch();

  return (
    <div
      className={`selectors__filter ${isOpen ? "open" : null} 
      ${title.toLowerCase() === "category" ? "category-filter" : null}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="filter__placeholder">
        <span className="title">{title}</span>
        <span className="arrow">
          <img src={rightArrow} alt=" " />
        </span>
      </div>

      {loading ? (
        <div className="preloaded">
          <Loader isSmall={true} />
        </div>
      ) : (
        <div className="filter__expanded" onClick={(e) => e.stopPropagation()}>
          {items &&
            !prices &&
            items.map((item, i) => (
              <div
                className="filter__item"
                key={String(i)}
                onClick={() =>
                  !filters.filtersBySubCategory.find(
                    (filter) => filter === item
                  ) && dispatch(addSubcategoryFilter(item))
                }
              >
                <span className="name">{item.name}</span>
              </div>
            ))}
          {prices &&
            !items &&
            prices.map((price, i) => (
              <div
                className="filter__item"
                key={String(i)}
                onClick={() =>
                  !filters.filtersByPrice.find((filter) => filter.name === price) &&
                  dispatch(addPriceFilter({name: price}))
                }
              >
                <span className="name">${price}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
