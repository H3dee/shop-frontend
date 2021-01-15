import React from "react";
import { ProductCardProps } from "../interfaces/IProductCard";
import stockIcon from "../img/icons/Group 132stock-icon.svg";
import star from "../img/icons/Star 1star.svg";
import "../scss/components/product-card.scss";

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  productName,
  price,
}) => {
  return (
    <div className="product-card">
      <div className="product__status">
        <div className="status__icon">
          <img src={stockIcon} alt=" " />
        </div>
        <span className="status__text" style={{ color: "#78A962" }}>
          in stock
        </span>
      </div>
      <div className="product__image">
        <img src={imageUrl} alt=" " />
      </div>
      <div className="product__feedback">
        <div className="feedback__stars">
          <div className="stars__item">
            <img src={star} alt="" />
          </div>
          <div className="stars__item">
            <img src={star} alt="" />
          </div>
          <div className="stars__item">
            <img src={star} alt="" />
          </div>
          <div className="stars__item">
            <img src={star} alt="" />
          </div>
          <div className="stars__item">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="feedback__count">
          reviews
          <span className="count"> (0)</span>
        </div>
      </div>
      <div className="product__name">{productName}</div>
      <div className="product__price">
        <div className="price__old">$499.00</div>
        <div className="price__new">
          $<span className="value">{price}</span>.00
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
