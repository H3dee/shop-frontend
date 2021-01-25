import React from "react";
import zipLogo from "../../assets/img/icons/Asset 1zip-logo.svg";
import CategoriesList from "./CategoriesList";
import NewProducts from "./NewProducts";

const PromotedCategoriesSection: React.FC = () => {

  return (
    <>
      <NewProducts />
      <div className="content__sponsor-ad">
        <div className="sponsor-ad__placeholder">
          <div className="sponsor-ad__logo">
            <img src={zipLogo} alt=" " />
          </div>
          <div className="sponsor-ad__text">
            <span className="bold">own</span> it now, up to 6 months interest
            free
            <a href="/home">learn more</a>
          </div>
        </div>
      </div>
      <CategoriesList />
    </>
  );
};

export default PromotedCategoriesSection;
