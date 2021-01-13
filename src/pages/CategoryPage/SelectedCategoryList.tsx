import React from "react";
import FiltersSection from "./FiltersSection";
import ListSection from "./ListSection";

const SelectedCategoryList: React.FC = () => {
  return (
    <div className="content__list">
      <div className="container">
        <div className="content__list__row">
          <FiltersSection />
          <ListSection />
        </div>
      </div>
    </div>
  );
};

export default SelectedCategoryList;
