import React from "react";
import ProductCard from "../../components(shared)/ProductCard";
import Category from "./Category";
import tempImg from '../../img/image 29test.png'
import zipLogo from "../../img/icons/Asset 1zip-logo.svg";

const CategoriesList: React.FC = () => {
  return (
    <>
      <div className="content__new-products">
        <div className="new-products__head">
          <div className="head__title">New Products</div>
          <div className="head__see-all">
            <a href="/home">see all new products</a>
          </div>
        </div>
        <div className="new-products__list">
          <ProductCard imageUrl={tempImg}/>
          <ProductCard imageUrl={tempImg}/>
          <ProductCard imageUrl={tempImg}/>
          <ProductCard imageUrl={tempImg}/>
          <ProductCard imageUrl={tempImg}/>
          <ProductCard imageUrl={tempImg}/>
        </div>
      </div>
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
      <div className="content__categories">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </>
  );
};

export default CategoriesList;
