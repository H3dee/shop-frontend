import React from "react";
import { ProductCardProps } from "../interfaces/IProductCard";
import stockIcon from "../img/icons/Group 132stock-icon.svg";
// import checkIcon from "../img/icons/Group 135check-icon.svg";
import star from '../img/icons/Star 1star.svg'
import "../scss/components/product-card.scss";

const ProductCard: React.FC<ProductCardProps> = (props) => {
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
        <img src={props.imageUrl} alt=" " />
      </div>
      <div className="product__feedback">
        <div className="feedback__stars">
              <div className="stars__item">
                    <img src={star} alt=""/>
              </div>
              <div className="stars__item">
                    <img src={star} alt=""/>
              </div>
              <div className="stars__item">
                    <img src={star} alt=""/>
              </div>
              <div className="stars__item">
                    <img src={star} alt=""/>
              </div>
              <div className="stars__item">
                    <img src={star} alt=""/>
              </div>
        </div>
        <div className="feedback__count">
          reviews
          <span className="count"> (0)</span>
        </div>
      </div>
      <div className="product__name">
        EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
      </div>
      <div className="product__price">
        <div className="price__old">$499.00</div>
        <div className="price__new">$499.00</div>
      </div>
    </div>
  );
};

export default ProductCard;
